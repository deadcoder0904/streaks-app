import { AiOutlineQuestion } from 'react-icons/ai'
import { FaCode, FaRunning, FaSwimmer } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import {
  GiCycling,
  GiMeditation,
  GiMuscleUp,
  GiTennisRacket,
} from 'react-icons/gi'
import { MdSmokeFree } from 'react-icons/md'

const icons = [
  {
    keywords: ['call', 'phone'],
    pic: FiPhoneCall,
  },
  {
    keywords: ['workout', 'muscle', 'body-building', 'body building'],
    pic: GiMuscleUp,
  },
  {
    keywords: ['cycling', 'cycle'],
    pic: GiCycling,
  },
  {
    keywords: ['running', 'run'],
    pic: FaRunning,
  },
  {
    keywords: ['swimming', 'swim'],
    pic: FaSwimmer,
  },
  {
    keywords: ['racket', 'tennis', 'badminton'],
    pic: GiTennisRacket,
  },
  {
    keywords: [
      'smoke',
      'smoking',
      'no smoking',
      'no-smoking',
      'smoke free',
      'no smoke',
    ],
    pic: MdSmokeFree,
  },
  {
    keywords: ['code', 'code everyday', 'program', 'programming'],
    pic: FaCode,
  },
  {
    keywords: ['meditate', 'meditation'],
    pic: GiMeditation,
  },
]

export const getIcon = name => {
  let icon = AiOutlineQuestion
  for (let i = 0; i < icons.length; i++) {
    const { keywords, pic } = icons[i]
    const lowerCaseName = name.toLowerCase()
    const doesKeywordExistInName = keywords.some(keyword =>
      lowerCaseName.includes(keyword),
    )
    if (doesKeywordExistInName) {
      icon = pic
      break
    }
  }

  return icon
}
