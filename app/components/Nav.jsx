"use client";
import React,{useState} from 'react';
import {HiMenu} from "react-icons/hi";
import Link from 'next/link';
import {RxCross2} from "react-icons/rx";
import styles from "../page.module.css"
const Nav = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
    <div> <h2>Magesh Murugan</h2></div>
    <div>
    <>
        <HiMenu onClick={() => setOpen(true)} className={styles.navb} />
      </>
      {open && (
        <div className={styles.navc} onClick={() => setOpen(false)}>
            <div>
                <RxCross2 onClick={() => setOpen(false)} className={styles.navb} />
            </div>
          <div className={styles.navca}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      )}
    </div>
    </>
  )
}

export default Nav