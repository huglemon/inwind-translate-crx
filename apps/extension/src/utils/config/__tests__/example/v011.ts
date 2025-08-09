export const configExample = {
  language: {
    detectedCode: 'eng',
    sourceCode: 'auto',
    targetCode: 'jpn',
    level: 'intermediate',
  },
  providersConfig: {
    openai: {
      apiKey: 'sk-1234567890',
      baseURL: 'https://api.openai.com/v1',
    },
    deepseek: {
      apiKey: undefined,
      baseURL: 'https://api.deepseek.com/v1',
    },
    gemini: {
      apiKey: undefined,
      baseURL: 'https://generativelanguage.googleapis.com/v1beta',
    },
  },
  read: {
    provider: 'openai',
    models: {
      openai: {
        model: 'gpt-4o-mini',
        isCustomModel: true,
        customModel: 'gpt-4.1-nano',
      },
      deepseek: {
        model: 'deepseek-chat',
        isCustomModel: false,
        customModel: '',
      },
    },
  },
  translate: {
    provider: 'microsoft',
    models: {
      microsoft: null,
      google: null,
      openai: {
        model: 'gpt-4o-mini',
        isCustomModel: true,
        customModel: 'gpt-4.1-nano',
      },
      deepseek: {
        model: 'deepseek-chat',
        isCustomModel: false,
        customModel: '',
      },
      gemini: {
        model: 'gemini-2.5-pro',
        isCustomModel: false,
        customModel: '',
      },
    },
    node: {
      enabled: true,
      hotkey: 'Control',
    },
    page: {
      range: 'main',
      autoTranslatePatterns: ['news.ycombinator.com'],
    },
    promptsConfig: {
      prompt: 'inWind Translate: TRANSLATE_DEFAULT_PROMPT',
      patterns: [
        {
          id: 'inWind Translate: TRANSLATE_DEFAULT_PROMPT',
          name: 'inWind Translate: TRANSLATE_DEFAULT_PROMPT',
          prompt: `Treat input as plain text input and translate it into {{targetLang}}, output translation ONLY. If translation is unnecessary (e.g. proper nouns, codes, etc.), return the original text. NO explanations. NO notes.
Input:
{{input}}
`,
        },
      ],
    },
    requestQueueConfig: {
      capacity: 300,
      rate: 5,
    },
  },
  floatingButton: {
    enabled: true,
    position: 0.66,
  },
  sideContent: {
    width: 400,
  },
}
