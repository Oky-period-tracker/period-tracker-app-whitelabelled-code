import _ from 'lodash'
import {
  Articles,
  Categories,
  SubCategories,
  Surveys,
  Quizzes,
  DidYouKnows,
  HelpCenters,
  AvatarMessages,
  PrivacyPolicy,
  TermsAndConditions,
  About,
} from '../../types'
import { Actions } from '../types/index'

export interface ContentState {
  articles: Articles
  categories: Categories
  subCategories: SubCategories
  surveys: Surveys
  quizzes: Quizzes
  didYouKnows: DidYouKnows
  helpCenters: HelpCenters
  avatarMessages: AvatarMessages
  privacyPolicy: PrivacyPolicy
  termsAndConditions: TermsAndConditions
  about: About
  aboutBanner: string
}

const initialState: ContentState = {
  articles: {
    byId: {},
    allIds: [],
  },
  categories: {
    byId: {},
    allIds: [],
  },
  subCategories: {
    byId: {},
    allIds: [],
  },
  surveys: {
    byId: {},
    allIds: [],
  },
  quizzes: {
    byId: {},
    allIds: [],
  },
  didYouKnows: {
    byId: {},
    allIds: [],
  },
  helpCenters: [],
  avatarMessages: [],
  privacyPolicy: [],
  termsAndConditions: [],
  about: [],
  aboutBanner: '',
}

export function contentReducer(state = initialState, action: Actions): ContentState {
  switch (action.type) {
    case 'INIT_STALE_CONTENT':
      return { ...action.payload }
    case 'FETCH_CONTENT_SUCCESS':
      return { ...action.payload }

    default:
      return state
  }
}
