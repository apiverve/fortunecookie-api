declare module '@apiverve/fortunecookie' {
  export interface fortunecookieOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface fortunecookieResponse {
    status: string;
    error: string | null;
    data: FortuneCookieGeneratorData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface FortuneCookieGeneratorData {
      fortune: null | string;
      type:    null | string;
  }

  export default class fortunecookieWrapper {
    constructor(options: fortunecookieOptions);

    execute(callback: (error: any, data: fortunecookieResponse | null) => void): Promise<fortunecookieResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: fortunecookieResponse | null) => void): Promise<fortunecookieResponse>;
    execute(query?: Record<string, any>): Promise<fortunecookieResponse>;
  }
}
