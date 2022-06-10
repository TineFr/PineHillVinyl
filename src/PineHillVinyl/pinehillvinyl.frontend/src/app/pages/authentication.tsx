import React from 'react'
import AuthenticationGrid from '../components/auth/authentication-grid.component'
import { Footer } from '../components/shared'
import SearchBar from '../components/shared/filter/search-bar/search-bar'

export const Authentication = () => {
  return (
    <>
    <SearchBar/>
    <AuthenticationGrid>login</AuthenticationGrid>
    </>
  )
}
