import type { Dictionary } from '@/dictionaries'
import type { Locale } from '../../i18n.config'

import { useEffect, useState } from 'react'
import { getDictionary } from '@/dictionaries'

export default function useDictionary(lang: Locale): Dictionary {
  const [dictionary, setDictionary] = useState<Dictionary>()

  const fetchDictionary = async () => {
    const _dictionary = await getDictionary(lang)
    setDictionary(_dictionary)
  }

  useEffect(() => {
    fetchDictionary()
  }, [])

  return dictionary!
}
