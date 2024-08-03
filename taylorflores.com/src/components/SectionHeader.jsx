import React from 'react'

export default function SectionHeader({ children, topMargin = false, bottomMargin = true}) {
    const styles = 'text-3xl text-white ' + 
        (topMargin ? 'mt-12 ' : '') + 
        (bottomMargin ? 'mb-12' : '')
    return (
        <h1 className={styles}>{children}</h1>
    )
}
