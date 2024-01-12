import type { Locale } from '../i18n.config'

export type Dictionary = {
  app: {
    lang: {
      notFound: {
        title: string,
        subTitle: string,
        goBackHome: string,
        callToAction: string,
      },
    },
  },
  components: {
    header: {
      menu: {
        product: string,
        pricing: string,
        company: string,
        blog: string,
        translate: {
          americanFlagAlt: string,
          frenchFlagAlt: string,
        },
      },
      subMenu: {
        watchDemo: string,
        contactUs: string,
        analytics: {
          title: string,
          subTitle: string,
        },
        trainings: {
          title: string,
          subTitle: string,
        },
        security: {
          title: string,
          subTitle: string,
        },
        integrations: {
          title: string,
          subTitle: string,
        },
        automations: {
          title: string,
          subTitle: string,
        },
      },
    },
    logo: {
      alt: string,
    },
  }
}

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import('./dictionaries/en.json').then(module => module.default),
  fr: () => import('./dictionaries/fr.json').then(module => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]?.()
