import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='w-100 h-100 footer-shadow'>
      <div className='p-0 d-flex flex-column h-100 container mt-5 py-5 justify-content-center align-items-center' style={{ height: 'max-content' }}>
        <div className="row row-gap-5 w-100 justify-content-center" dir='rtl'>

          <div className="col-xl-6 col-12 d-flex justify-content-center">
            <div className="row row-gap-5 w-100">
              <SiteFooterMenu title='دسترسی های سریع' col='col-xl-3'>
                <ItemSiteFooter item='صفحه اصلی' />
                <ItemSiteFooter item='صفحه اصلی' />
                <ItemSiteFooter item='صفحه اصلی' />
                <ItemSiteFooter item='صفحه اصلی' />
                <ItemSiteFooter item='صفحه اصلی' />
                <ItemSiteFooter item='صفحه اصلی' />
              </SiteFooterMenu>
              <SiteFooterMenu title='برندهای مطرح'>
                <ItemSiteFooter item='شیائومی' />
                <ItemSiteFooter item='شیائومی' />
                <ItemSiteFooter item='شیائومی' />
                <ItemSiteFooter item='شیائومی' />
                <ItemSiteFooter item='شیائومی' />
                <ItemSiteFooter item='شیائومی' />
              </SiteFooterMenu>
              <SiteFooterMenu title='راهنمای مشتریان'>
                <ItemSiteFooter item='سبد خرید' />
                <ItemSiteFooter item='سبد خرید' />
                <ItemSiteFooter item='سبد خرید' />
                <ItemSiteFooter item='سبد خرید' />
                <ItemSiteFooter item='سبد خرید' />
                <ItemSiteFooter item='سبد خرید' />
              </SiteFooterMenu>
              <SiteFooterMenu title='دسته بندی ها' col='col-xl-3'>
                <ItemSiteFooter item='موبایل' />
                <ItemSiteFooter item='موبایل' />
                <ItemSiteFooter item='موبایل' />
                <ItemSiteFooter item='موبایل' />
                <ItemSiteFooter item='موبایل' />
                <ItemSiteFooter item='موبایل' />
              </SiteFooterMenu>
            </div>
          </div>

          <div className="col-xl-3 col-sm-6 d-flex justify-content-center">
            <div className='h-100 w-100 d-flex flex-column'>
              <TitleSiteFooter title='پرفروش ترین محصولات' />
              <div className='d-flex w-100 h-100 justify-content-between align-items-start flex-column mt-4 row-gap-footer-site-item'>
                <SiteFooterProducts />
                <SiteFooterProducts />
                <SiteFooterProducts />
                <SiteFooterProducts />
                <SiteFooterProducts />
                <SiteFooterProducts />
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-sm-6 d-flex justify-content-center">
            <div className='h-100 w-100 d-flex flex-column'>
              <TitleSiteFooter title='چگونه به مــــــا اعتماد کنیم' />

              <div className='d-flex w-100 h-100 justify-content-start align-items-center flex-column mt-4 row-gap-footer-site-item '>
                <div className="row w-100 h-100 row-gap-3">

                  <div className="col-12 d-flex justify-content-center p-0">
                    <div className="row w-100 h-100 justify-content-around">
                      <div className="col-sm-4 col-md-3 col-xl-4 col-3 col-namd-img p-lg-namad-img h-100">
                        <Link to='/' className='w-100 h-100 d-flex justify-content-center align-items-center'>
                          <img src="./assets/img/Namad/3-1.png" alt="" style={{width:'100%'}} />
                        </Link>
                      </div>
                      <div className="col-sm-4 col-md-3 col-xl-4 col-3 col-namd-img p-lg-namad-img h-100">
                        <Link to='/' className='w-100 h-100 d-flex justify-content-center align-items-center'>
                          <img src="./assets/img/Namad/3-1.png" alt="" style={{width:'100%'}} />
                        </Link>
                      </div>
                      <div className="col-sm-4 col-md-3 col-xl-4 col-3 col-namd-img p-lg-namad-img h-100">
                        <Link to='/' className='w-100 h-100 d-flex justify-content-center align-items-center'>
                          <img src="./assets/img/Namad/3-1.png" alt="" style={{width:'100%'}} />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 bg-warning w-100 d-flex">
                    media
                  </div>

                </div>
              </div>
              
            </div>
          </div>

        </div>

      </div>
    </footer>
  )
}

export function SiteFooterMenu(prop) {
  return (
    <div className={`${prop.col ? prop.col : 'col-xl-3'} col-sm-6 col-12 p-0`}>
      <div className='w-100 h-100'>
        <TitleSiteFooter title={prop.title} />
        <div className='d-flex flex-column row-gap-footer-site-item mt-4'>
          {prop.children}
        </div>
      </div>
    </div>
  )
}

export function SiteFooterProducts(prop) {
  return (
    <>
      <div className='row d-flex justify-content-between w-100'>
        <div className="col-6 d-flex justify-content-center">
          <Link to='/' className='title-product-site-footer text-decoration-none text-color-main text-st-blog-suggested w-100 ItemSiteFooter' style={{ fontSize: '0.8rem' }}>لپ تاپ سرفیس مایکروسافت</Link>
        </div>
        <div className="col-4 p-0 d-flex justify-content-center">
          <span className='price-product-site-footer text-st-blog-suggested text-color-main w-100 d-flex justify-content-end' style={{ fontSize: '0.8rem' }}>51,000,000 تومان</span>
        </div>
      </div>
    </>
  )
}

export function TitleSiteFooter(prop) {
  return (
    <>
      <div className='position-relative pb-3'>
        <span className='TitleSiteFooter sub-text-color-main w-100 d-flex w-100' style={{ fontSize: '0.9rem' }}>{prop.title}</span>
      </div>
    </>
  )
}

export function ItemSiteFooter(prop) {
  return (
    <>
      <div className='d-flex w-75'>
        <Link to='/' className='text-decoration-none text-st-blog-suggested text-color-main ItemSiteFooter' style={{ width: 'max-content', fontSize: '0.8rem' }}>{prop.item}</Link>
      </div>
    </>
  )
}

export default Footer