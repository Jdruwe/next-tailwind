import React from 'react'
import Link from 'next/link'

const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
].map(link => ({
  ...link,
  key: `nav-link-${link.href}-${link.label}`,
}));

const Nav = () => (
  <nav>
    <div>
        <p>This is the nav!</p>
    </div>
  </nav>
)

export default Nav
