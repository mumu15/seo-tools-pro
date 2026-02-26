'use client'
import { useState, useCallback } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function WordCounter() {
  const [text, setText] = useState('')

  const stats = useCallback(() => {
    const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length
    const chars = text.length
    const charsNoSpaces = text.replace(/\s/g, '').length
    const sentences = text === '' ? 0 : (text.match(/[^.!?]*[.!?]+/g) || []).length
    const paragraphs = text === '' ? 0 : text.split(/\n\s*\n/).filter(p => p.trim()).length || (text.trim() ? 1 : 0)
    const readTime = Math.max(1, Math.ceil(words / 200))
    const uniqueWords = text.trim() === '' ? 0 : new Set(text.toLowerCase().match(/\b\w+\b/g) || []).size
    return { words, chars, charsNoSpaces, sentences, paragraphs, readTime, uniqueWords }
  }, [text])

  const s = stats()

  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Word Counter
          </h1>
          <p className="text-slate-400 text-lg">Count words, characters, sentences and more — instantly as you type</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {[
            { label: 'Words', value: s.words, color: