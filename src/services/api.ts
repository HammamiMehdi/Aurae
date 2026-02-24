const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

export interface RegisterAgencyRequest {
  // From InscriptionFormAgence
  fullName: string;
  birthDate: string;
  email: string;
  password: string;
  phone?: string;
  agencyType: string; // 'agence_mannequin' | 'agence_talents' | 'production'
  city: string;
  country: string;
  instagram?: string;
  
  // From EntrepriseForm
  companyName: string;
  companyDescription: string;
  legalStatus: string; // 'micro-entreprise' | 'societe' | 'en-cours' | 'particulier' | 'autre'
  vatNumber?: string;
  services: string[];
  profession?: string;
  verificationDoc?: File;
  acceptedCharter: boolean;
  acceptedCGU: boolean;
  acceptedCGV: boolean;
}

export interface AuthResponse {
  accessToken: string;
  user: {
    id: string;
    email: string;
    fullName: string;
    role: string;
  };
}

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public data?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export interface RegisterCreatorRequest {
  // From InscriptionForm
  fullName: string;
  birthDate: string;
  email: string;
  password: string;
  phone?: string;
  role: string; // 'mannequin' | 'photographe' | 'realisateur' | 'set_designer' | 'illustrateur'
  sousCategorie?: string;
  city: string;
  country: string;
  instagram?: string;
  
  // From CreateurForm
  companyName?: string;
  bio: string; // description
  legalStatus?: string;
  vatNumber?: string;
  services?: string[];
  verificationDoc?: File;
  acceptedCharter: boolean;
  acceptedCGU: boolean;
  acceptedCGV: boolean;
}

export interface RegisterModelRequest {
  // From InscriptionForm
  fullName: string;
  birthDate: string;
  email: string;
  password: string;
  phone?: string;
  role: string; // 'mannequin' | 'photographe' | 'realisateur' | 'set_designer' | 'illustrateur'
  sousCategorie?: string;
  city: string;
  country: string;
  instagram?: string;
  
  // From ModeleForm
  professionalStatus?: string; // situationPro
  legalStatus?: string; // statutJuridique
  verificationDoc?: File; // justificatif
  
  // From ProfilPhysiqueForm
  gender?: string; // sexe
  age?: number; // âge (calculated from birthDate)
  height?: string; // taille
  weight?: string; // poids
  shoeSize?: string; // pointure
  measurements?: string; // mensurations
  hairColor?: string; // couleur de cheveux
  hairLength?: string; // longueur de cheveux
  eyeColor?: string; // couleur des yeux
  skinTone?: string; // teint / carnation
  bodyType?: string; // silhouette / morphotype
  otherFeatures?: string; // autres particularités
  portraitPhoto?: File; // portrait / visage
  fullBodyPhoto?: File; // full body
  sideProfilePhoto?: File; // profil latéral
  
  // Legal consents (required)
  acceptedCharter: boolean;
  acceptedCGU: boolean;
  acceptedCGV: boolean;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export const api = {
  /**
   * Login user
   */
  async login(data: LoginRequest): Promise<AuthResponse> {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new ApiError(
        errorData.message || `HTTP error! status: ${response.status}`,
        response.status,
        errorData
      );
    }

    return await response.json();
  },

  /**
   * Register a new agency
   */
  async registerAgency(data: RegisterAgencyRequest): Promise<AuthResponse> {
    const formData = new FormData();
    
    // Add all form fields to FormData
    formData.append('fullName', data.fullName);
    formData.append('birthDate', data.birthDate);
    formData.append('email', data.email);
    formData.append('password', data.password);
    if (data.phone) formData.append('phone', data.phone);
    formData.append('agencyType', data.agencyType);
    formData.append('city', data.city);
    formData.append('country', data.country);
    if (data.instagram) formData.append('instagram', data.instagram);
    
    formData.append('companyName', data.companyName);
    formData.append('companyDescription', data.companyDescription);
    formData.append('legalStatus', data.legalStatus);
    if (data.vatNumber) formData.append('vatNumber', data.vatNumber);
    // Append each service with the same key for array handling
    data.services.forEach(service => {
      formData.append('services', service);
    });
    if (data.profession) formData.append('profession', data.profession);
    if (data.verificationDoc) {
      formData.append('verificationDoc', data.verificationDoc);
    }
    formData.append('acceptedCharter', data.acceptedCharter.toString());
    formData.append('acceptedCGU', data.acceptedCGU.toString());
    formData.append('acceptedCGV', data.acceptedCGV.toString());

    const response = await fetch(`${API_BASE_URL}/auth/register/agency`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new ApiError(
        errorData.message || `HTTP error! status: ${response.status}`,
        response.status,
        errorData
      );
    }

    return await response.json();
  },

  /**
   * Register a new creator
   */
  async registerCreator(data: RegisterCreatorRequest): Promise<AuthResponse> {
    // Map frontend role to backend specialtyType
    const roleToSpecialtyMap: Record<string, string> = {
      'photographe': 'PHOTO',
      'realisateur': 'VIDEO',
      'set_designer': 'BOTH',
      'illustrateur': 'BOTH',
      'mannequin': 'BOTH', // Default for mannequin
    };
    const specialtyType = roleToSpecialtyMap[data.role] || 'BOTH';

    // Combine additional info into bio and gearNotes
    let bio = data.bio || '';
    if (data.companyName) {
      bio = `Entreprise: ${data.companyName}\n${bio}`.trim();
    }
    if (data.sousCategorie) {
      bio = `${bio}\nSpécialité: ${data.sousCategorie}`.trim();
    }

    let gearNotes = '';
    if (data.services && data.services.length > 0) {
      gearNotes = `Services: ${data.services.join(', ')}`;
    }
    if (data.legalStatus) {
      gearNotes = `${gearNotes}\nStatut juridique: ${data.legalStatus}`.trim();
    }
    if (data.vatNumber) {
      gearNotes = `${gearNotes}\nTVA: ${data.vatNumber}`.trim();
    }

    const requestBody = {
      email: data.email,
      password: data.password,
      fullName: data.fullName,
      phone: data.phone || undefined,
      city: data.city,
      country: data.country,
      specialtyType: specialtyType,
      bio: bio || undefined,
      instagram: data.instagram || undefined,
      gearNotes: gearNotes || undefined,
    };

    const response = await fetch(`${API_BASE_URL}/auth/register/creator`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new ApiError(
        errorData.message || `HTTP error! status: ${response.status}`,
        response.status,
        errorData
      );
    }

    return await response.json();
  },

  /**
   * Register a new model
   */
  async registerModel(data: RegisterModelRequest): Promise<AuthResponse> {
    const requestBody = {
      email: data.email,
      password: data.password,
      fullName: data.fullName,
      phone: data.phone || undefined,
      city: data.city,
      country: data.country,
      birthDate: data.birthDate || undefined,
      professionalStatus: data.professionalStatus || undefined,
      representingAgency: undefined, // Not collected in frontend forms
      activeOnSocialMedia: data.instagram ? true : false,
      instagram: data.instagram || undefined,
      professionalRole: data.role || undefined, // Map role to professionalRole
      docVersion: '2025-01', // Default version
      acceptedCharter: data.acceptedCharter,
      acceptedCGU: data.acceptedCGU,
      acceptedCGV: data.acceptedCGV,
    };

    const response = await fetch(`${API_BASE_URL}/auth/register/model`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new ApiError(
        errorData.message || `HTTP error! status: ${response.status}`,
        response.status,
        errorData
      );
    }

    return await response.json();
  },
};

export interface RegisterModelRequest {
  // From InscriptionForm
  fullName: string;
  birthDate: string;
  email: string;
  password: string;
  phone?: string;
  role: string; // 'mannequin' | 'photographe' | 'realisateur' | 'set_designer' | 'illustrateur'
  sousCategorie?: string;
  city: string;
  country: string;
  instagram?: string;
  
  // From ModeleForm
  professionalStatus?: string; // situationPro
  legalStatus?: string; // statutJuridique
  verificationDoc?: File; // justificatif
  
  // From ProfilPhysiqueForm
  gender?: string; // sexe
  age?: number; // âge (calculated from birthDate)
  height?: string; // taille
  weight?: string; // poids
  shoeSize?: string; // pointure
  measurements?: string; // mensurations
  hairColor?: string; // couleur de cheveux
  hairLength?: string; // longueur de cheveux
  eyeColor?: string; // couleur des yeux
  skinTone?: string; // teint / carnation
  bodyType?: string; // silhouette / morphotype
  otherFeatures?: string; // autres particularités
  portraitPhoto?: File; // portrait / visage
  fullBodyPhoto?: File; // full body
  sideProfilePhoto?: File; // profil latéral
  
  // Legal consents (required)
  acceptedCharter: boolean;
  acceptedCGU: boolean;
  acceptedCGV: boolean;
}
