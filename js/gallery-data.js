/* ============================================================
   GALLERY DATA — single source of truth
   Tags on each item control:
     • gallery.html filter buttons
     • supporting.html modal photo links (match character name)

   To link a photo to a supporting character:
     add the character's name (lowercase, no spaces) to its tags array
     e.g. tags: ['character', 'kaito']  →  shows in Kaito's file

   orient: 'p' = portrait, 'l' = landscape, 's' = square
   src: path relative to gallery/index.html, e.g. '../art/anti-portrait.jpg'
        leave '' while placeholder
   ============================================================ */

const GALLERY_DATA = [
  {
    src: '',
    caption: 'Anti',
    hashtags: '#character #portrait',
    tags: ['anti', 'character'],
    orient: 'p',
  },
  {
    src: '',
    caption: 'Nyx',
    hashtags: '#character #portrait',
    tags: ['nyx', 'character'],
    orient: 'p',
  },
  {
    src: '',
    caption: 'The Cities',
    hashtags: '#environment',
    tags: ['environment'],
    orient: 'l',
  },
  {
    src: '',
    caption: 'M02 — First Meeting',
    hashtags: '#concept-art',
    tags: ['concept-art'],
    orient: 'l',
  },
  {
    src: '',
    caption: 'Anti — Concept',
    hashtags: '#anti #concept-art',
    tags: ['anti', 'concept-art'],
    orient: 's',
  },
  {
    src: '',
    caption: 'Nyx — Concept',
    hashtags: '#nyx #concept-art',
    tags: ['nyx', 'concept-art'],
    orient: 's',
  },
  {
    src: '',
    caption: 'Stage Environment',
    hashtags: '#environment',
    tags: ['environment'],
    orient: 'l',
  },
  {
    src: '',
    caption: 'Later Stages',
    hashtags: '#concept-art',
    tags: ['concept-art'],
    orient: 'p',
  },
  {
    src: '',
    caption: 'Anti — Ref 2',
    hashtags: '#anti',
    tags: ['anti'],
    orient: 's',
  },
  {
    src: '',
    caption: 'Nyx — Ref 2',
    hashtags: '#nyx',
    tags: ['nyx'],
    orient: 's',
  },
];
