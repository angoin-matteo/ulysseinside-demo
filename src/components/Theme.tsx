'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { FaDesktop } from 'react-icons/fa'
import { FaRegMoon, FaMoon, FaRegSun, FaSun } from 'react-icons/fa6'

export default function Theme() {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (isMounted) {
    return (
      <div className="inline-flex items-center h-12 px-1 shadow-lg rounded-lg bg-gray-200 dark:bg-gray-700 lg:bg-gray-100 lg:dark:bg-gray-800">
        <button
          onClick={() => setTheme('system')}
          className={`${theme === 'system' && 'bg-gray-300 dark:bg-gray-600 lg:bg-gray-200 lg:dark:bg-gray-700'} mx-1 p-2 rounded-lg text-gray-900 dark:text-gray-50 hover:bg-gray-300 hover:dark:bg-gray-600 lg:hover:bg-gray-200 lg:hover:dark:bg-gray-700`}
        >
          <FaDesktop />
        </button>
        <button
          onClick={() => setTheme('dark')}
          className={`${theme === 'dark' && 'bg-gray-300 dark:bg-gray-600 lg:bg-gray-200 lg:dark:bg-gray-700'} mx-1 p-2 rounded-lg text-gray-900 dark:text-gray-50 hover:bg-gray-300 hover:dark:bg-gray-600 lg:hover:bg-gray-200 lg:hover:dark:bg-gray-700`}
        >
          {theme === 'dark' ? <FaMoon /> : <FaRegMoon />}
        </button>
        <button
          onClick={() => setTheme('light')}
          className={`${theme === 'light' && 'bg-gray-300 dark:bg-gray-600 lg:bg-gray-200 lg:dark:bg-gray-700'} mx-1 p-2 rounded-lg text-gray-900 dark:text-gray-50 hover:bg-gray-300 hover:dark:bg-gray-600 lg:hover:bg-gray-200 lg:hover:dark:bg-gray-700`}
        >
          {theme === 'light' ? <FaSun /> : <FaRegSun />}
        </button>
      </div>
    )
  }
}
