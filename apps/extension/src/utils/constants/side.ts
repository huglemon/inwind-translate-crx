export const MIN_SIDE_CONTENT_WIDTH = 420 // px
export const DEFAULT_SIDE_CONTENT_WIDTH = 420 // px

export const DOWNLOAD_FILE_ITEMS = {
  md: {
    label: 'Markdown',
  },
}

export const PARAGRAPH_DEPTH = 3

export enum MARKDOWN_TEMPLATE_TOKEN {
  title = '{{ inWind Translate: title }}',
  sentence = '{{ inWind Translate:sentence }}',
  words = '{{ inWind Translate:words }}',
  explanation = '{{ inWind Translate:explanation }}',
  originalSentence = '{{ inWind Translate:originalSentence }}',
  translatedSentence = '{{ inWind Translate:translatedSentence }}',
  word = '{{ inWind Translate:word }}',
  syntacticCategory = '{{ inWind Translate:syntacticCategory }}',
  wIndex = '{{ inWind Translate:wIndex }}',
  globalIndex = '{{ inWind Translate:globalIndex }}',
}

export const AST_TEMPLATE = `
# ${MARKDOWN_TEMPLATE_TOKEN.title}

${MARKDOWN_TEMPLATE_TOKEN.sentence}
`

export const SENTENCE_TEMPLATE = `
## Sentence ${MARKDOWN_TEMPLATE_TOKEN.globalIndex}

**${MARKDOWN_TEMPLATE_TOKEN.originalSentence}**

${MARKDOWN_TEMPLATE_TOKEN.translatedSentence}

### Key Words

${MARKDOWN_TEMPLATE_TOKEN.words}

### Explanation

${MARKDOWN_TEMPLATE_TOKEN.explanation}
`

export const WORDS_TEMPLATE = `${MARKDOWN_TEMPLATE_TOKEN.wIndex}. **${MARKDOWN_TEMPLATE_TOKEN.word}** ${MARKDOWN_TEMPLATE_TOKEN.syntacticCategory}
  ${MARKDOWN_TEMPLATE_TOKEN.explanation}
`
