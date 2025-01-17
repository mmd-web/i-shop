import React, { useEffect } from 'react'
import './HeadSection.css'
import { FaChevronCircleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

function HeadSection(prop) {
  return (
    <>
      {prop.moreItems ?
        <div className='head-section bg-main d-flex flex-row justify-content-between align-items-center mt-4 mb-4'>
          <Link to={`${prop.Link}`} className='head-section-left bg-main pe-3 text-decoration-none fs-HeadSection-link'>
            <FaChevronCircleLeft fontSize={22} className='icon-head-section me-3' />
            مشاهده همه
          </Link>
          <span className='head-section-right bg-main ps-3 fs-HeadSection'>{prop.title}</span>
        </div>
        :
        <div className='head-section d-flex flex-row justify-content-end align-items-center mt-4 mb-4'>
          <span className='head-section-right bg-main ps-3 fs-HeadSection'>{prop.title}</span>
        </div>
      }

    </>
  )
}

export default HeadSection