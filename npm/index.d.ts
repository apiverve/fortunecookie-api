declare module '@apiverve/fortunecookie' {
  export interface fortunecookieOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface fortunecookieResponse {
    status: string;
    error: string | null;
    data: FortuneCookieGeneratorData;
    code?: number;
  }


  interface FortuneCookieGeneratorData {
      count:          number;
      requestedType:  string;
      fortunes:       Fortune[];
      availableTypes: string[];
  }
  
  interface Fortune {
      fortune:      string;
      type:         string;
      luckyNumbers: number[];
  }

  export default class fortunecookieWrapper {
    constructor(options: fortunecookieOptions);

    execute(callback: (error: any, data: fortunecookieResponse | null) => void): Promise<fortunecookieResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: fortunecookieResponse | null) => void): Promise<fortunecookieResponse>;
    execute(query?: Record<string, any>): Promise<fortunecookieResponse>;
  }
}
