import Container from "./components/Container";
import Flex from "./components/Flex";
import Heading from "./components/Heading";
import Image from "./components/Image";
import Logo from "./assets/images/logo.png";
import Menu from "./components/Menu";
import { CiUser, CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";
import Button from "./components/Button";
import Dining from "./assets/images/dining.png";
import Living from "./assets/images/living.png";
import Bedroom from "./assets/images/bedroom.png";
import Product01 from "./assets/images/product-img-01.png";
import Product02 from "./assets/images/product-img-02.png";
import Product03 from "./assets/images/product-img-03.png";
import Product04 from "./assets/images/product-img-04.png";
import { IoShareSocial } from "react-icons/io5";
import { MdCompareArrows } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import Promotion01 from "./assets/images/promotion-img-01.png";
import Promotion02 from "./assets/images/promotion-img-02.png";
import { FaArrowRightLong } from "react-icons/fa6";
import FLogo from "./assets/images/footer-logo.png"

function App() {
  return (
    <>
      {/* Header Section Start  */}
      <div id="header_section" className={"py-8 font-primary"}>
        <Container className={"max-w-1286"}>
          <Flex className={"items-center justify-between"}>
            <div className="menu_logo w-2/5">
              <Image imgSrc={Logo} imgAlt={"logo"} />
            </div>
            <div className="nav_links w-2/5">
              <Flex
                className={"items-center space-x-16 font-medium"}
              >
                <Menu mText={"Home"} />
                <Menu mText={"Shop"} />
                <Menu mText={"About"} />
                <Menu mText={"Contact"} />
              </Flex>
            </div>
            <div className="menu_icons w-1/5">
              <Flex className={"items-center space-x-11 text-xl"}>
                <CiUser />
                <CiSearch />
                <CiHeart />
                <CiShoppingCart />
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Header Section End  */}

      {/* Hero Section Start  */}
      <div
        id="hero_section"
        className={"bg-heroImg bg-cover bg-center bg-no-repeat pt-36 pb-28 mb-14 font-primary"}
      >
        <Container>
          <div className="hero_content ml-auto max-w-643 bg-heroColor pt-16 px-10 pb-9 rounded-[10px]">
            <Heading
              as={"p"}
              text={"New Arrival"}
              className={"text-333 font-semibold tracking-[3px]"}
            />
            <Heading
              as={"h1"}
              text={"Discover Our New Collection"}
              className={
                "max-w-[440px] text-primary font-bold text-[52px] leading-[65px] mb-5"
              }
            />
            <Heading
              as={"p"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
              }
              className={
                "max-w-[520px] text-lg text-333 font-medium leading-6 mb-12"
              }
            />
            <Button
              bText={"Buy Now"}
              className={
                "px-[72px] py-6 bg-primary font-bold text-white uppercase"
              }
            />
          </div>
        </Container>
      </div>
      {/* Hero Section End  */}

      {/* Range Section Start  */}
      <div id="range_section" className={"mb-14 font-primary"}>
        <Container>
          <div className="range_heading mb-16 text-center">
            <Heading
              as={"h2"}
              text={"Browse The Range"}
              className={"font-bold text-333 text-3xl"}
            />
            <Heading
              as={"p"}
              text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
              className={"text-666 text-[20px]"}
            />
          </div>
          <div className="range_img_gallery">
            <Flex className={"justify-between"}>
              <div className="range_item">
                <Image
                  imgSrc={Dining}
                  imgAlt={"Dining image"}
                  className={"max-w-[380px] mb-5"}
                />
                <Heading
                  as={"p"}
                  text={"Dining"}
                  className={"font-semibold text-333 text-2xl text-center"}
                />
              </div>
              <div className="range_item">
                <Image
                  imgSrc={Living}
                  imgAlt={"Living image"}
                  className={"max-w-[380px] mb-5"}
                />
                <Heading
                  as={"p"}
                  text={"Living"}
                  className={"font-semibold text-333 text-2xl text-center"}
                />
              </div>
              <div className="range_item">
                <Image
                  imgSrc={Bedroom}
                  imgAlt={"Bedroom image"}
                  className={"max-w-[380px] mb-5"}
                />
                <Heading
                  as={"p"}
                  text={"Bedroom"}
                  className={"font-semibold text-333 text-2xl text-center"}
                />
              </div>
            </Flex>
          </div>
        </Container>
      </div>
      {/* Range Section End  */}

      {/* Product Section Start  */}
      <div id="product_section font-primary">
        <Container>
          <div className="product_heading mb-8 text-center">
            <Heading
              as={"h2"}
              text={"Our Products"}
              className={"font-bold text-A3A3 text-[40px]"}
            />
          </div>
          <div className="product_wrapper">
            <Flex className={'flex-wrap gap-8'}>
              <div className="product_item relative group">
                <Image
                  imgSrc={Product01}
                  imgAlt={"Product image"}
                  className={""}
                />
                <div className="product_badge absolute top-5 right-5 bg-redBadge text-white font-medium h-12 w-12 rounded-full text-center">
                  <Heading as={"p"} text={"-30%"} className={"leading-[48px]"} />
                </div>
                <div className="product_details p-4 bg-productBg">
                  <Heading as={'p'} text={'Syltherine'} className={'font-semibold text-A3A3 text-2xl'}/>
                  <Heading as={'p'} text={'Stylish cafe chair'} className={'font-medium text-8989'}/>
                  <div className="product_price mb-4">
                    <span className={"font-semibold text-[20px] text-A3A3"}>Rp 2.500.000</span>
                    <span className={'text-B0B0 line-through ml-3'}>Rp 3.500.000</span>
                  </div>
                </div>
                <div className="product_overlay bg-A3A3 opacity-70 absolute top-0 left-0 w-full h-full hidden group-hover:block">
                  <div className="overlay_content text-center relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Button bText={'Add to cart'} className={'px-12 py-3 mb-6 bg-white text-primary font-semibold'}/>
                    <div className="overlay_share_btns">
                      <Flex className={'items-center space-x-4 justify-center'}>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <IoShareSocial /> 
                          <Heading as={'p'} text={'Share'} className={'ml-[2px]'}/>
                        </div>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <MdCompareArrows /> 
                          <Heading as={'p'} text={'Compare'} className={'ml-[2px]'}/>
                        </div>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <FaRegHeart /> 
                          <Heading as={'p'} text={'Like'} className={'ml-[2px]'}/>
                        </div>
                      </Flex>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product_item relative group">
                <Image
                  imgSrc={Product02}
                  imgAlt={"Product image"}
                  className={""}
                />
                <div className="product_badge absolute top-5 right-5 bg-redBadge text-white font-medium h-12 w-12 rounded-full text-center">
                  <Heading as={"p"} text={"-40%"} className={"leading-[48px]"} />
                </div>
                <div className="product_details p-4 bg-productBg">
                  <Heading as={'p'} text={'Leviosa'} className={'font-semibold text-A3A3 text-2xl'}/>
                  <Heading as={'p'} text={'Stylish cafe chair'} className={'font-medium text-8989'}/>
                  <div className="product_price mb-4">
                    <span className={"font-semibold text-[20px] text-A3A3"}>Rp 2.500.000</span>
                    <span className={'text-B0B0 line-through ml-3'}>Rp 3.500.000</span>
                  </div>
                </div>
                <div className="product_overlay bg-A3A3 opacity-70 absolute top-0 left-0 w-full h-full hidden group-hover:block">
                  <div className="overlay_content text-center relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Button bText={'Add to cart'} className={'px-12 py-3 mb-6 bg-white text-primary font-semibold'}/>
                    <div className="overlay_share_btns">
                      <Flex className={'items-center space-x-4 justify-center'}>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <IoShareSocial /> 
                          <Heading as={'p'} text={'Share'} className={'ml-[2px]'}/>
                        </div>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <MdCompareArrows /> 
                          <Heading as={'p'} text={'Compare'} className={'ml-[2px]'}/>
                        </div>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <FaRegHeart /> 
                          <Heading as={'p'} text={'Like'} className={'ml-[2px]'}/>
                        </div>
                      </Flex>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product_item relative group">
                <Image
                  imgSrc={Product01}
                  imgAlt={"Product image"}
                  className={""}
                />
                <div className="product_badge absolute top-5 right-5 bg-redBadge text-white font-medium h-12 w-12 rounded-full text-center">
                  <Heading as={"p"} text={"-30%"} className={"leading-[48px]"} />
                </div>
                <div className="product_details p-4 bg-productBg">
                  <Heading as={'p'} text={'Syltherine'} className={'font-semibold text-A3A3 text-2xl'}/>
                  <Heading as={'p'} text={'Stylish cafe chair'} className={'font-medium text-8989'}/>
                  <div className="product_price mb-4">
                    <span className={"font-semibold text-[20px] text-A3A3"}>Rp 2.500.000</span>
                    <span className={'text-B0B0 line-through ml-3'}>Rp 3.500.000</span>
                  </div>
                </div>
                <div className="product_overlay bg-A3A3 opacity-70 absolute top-0 left-0 w-full h-full hidden group-hover:block">
                  <div className="overlay_content text-center relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Button bText={'Add to cart'} className={'px-12 py-3 mb-6 bg-white text-primary font-semibold'}/>
                    <div className="overlay_share_btns">
                      <Flex className={'items-center space-x-4 justify-center'}>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <IoShareSocial /> 
                          <Heading as={'p'} text={'Share'} className={'ml-[2px]'}/>
                        </div>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <MdCompareArrows /> 
                          <Heading as={'p'} text={'Compare'} className={'ml-[2px]'}/>
                        </div>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <FaRegHeart /> 
                          <Heading as={'p'} text={'Like'} className={'ml-[2px]'}/>
                        </div>
                      </Flex>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product_item relative group">
                <Image
                  imgSrc={Product02}
                  imgAlt={"Product image"}
                  className={""}
                />
                <div className="product_badge absolute top-5 right-5 bg-greenBadge text-white font-medium h-12 w-12 rounded-full text-center">
                  <Heading as={"p"} text={"New"} className={"leading-[48px]"} />
                </div>
                <div className="product_details p-4 bg-productBg">
                  <Heading as={'p'} text={'Leviosa'} className={'font-semibold text-A3A3 text-2xl'}/>
                  <Heading as={'p'} text={'Stylish cafe chair'} className={'font-medium text-8989'}/>
                  <div className="product_price mb-4">
                    <span className={"font-semibold text-[20px] text-A3A3"}>Rp 2.500.000</span>
                    <span className={'text-B0B0 line-through ml-3'}>Rp 3.500.000</span>
                  </div>
                </div>
                <div className="product_overlay bg-A3A3 opacity-70 absolute top-0 left-0 w-full h-full hidden group-hover:block">
                  <div className="overlay_content text-center relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Button bText={'Add to cart'} className={'px-12 py-3 mb-6 bg-white text-primary font-semibold'}/>
                    <div className="overlay_share_btns">
                      <Flex className={'items-center space-x-4 justify-center'}>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <IoShareSocial /> 
                          <Heading as={'p'} text={'Share'} className={'ml-[2px]'}/>
                        </div>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <MdCompareArrows /> 
                          <Heading as={'p'} text={'Compare'} className={'ml-[2px]'}/>
                        </div>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <FaRegHeart /> 
                          <Heading as={'p'} text={'Like'} className={'ml-[2px]'}/>
                        </div>
                      </Flex>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product_item relative group">
                <Image
                  imgSrc={Product01}
                  imgAlt={"Product image"}
                  className={""}
                />
                <div className="product_badge absolute top-5 right-5 bg-greenBadge text-white font-medium h-12 w-12 rounded-full text-center">
                  <Heading as={"p"} text={"New"} className={"leading-[48px]"} />
                </div>
                <div className="product_details p-4 bg-productBg">
                  <Heading as={'p'} text={'Syltherine'} className={'font-semibold text-A3A3 text-2xl'}/>
                  <Heading as={'p'} text={'Stylish cafe chair'} className={'font-medium text-8989'}/>
                  <div className="product_price mb-4">
                    <span className={"font-semibold text-[20px] text-A3A3"}>Rp 2.500.000</span>
                    <span className={'text-B0B0 line-through ml-3'}>Rp 3.500.000</span>
                  </div>
                </div>
                <div className="product_overlay bg-A3A3 opacity-70 absolute top-0 left-0 w-full h-full hidden group-hover:block">
                  <div className="overlay_content text-center relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Button bText={'Add to cart'} className={'px-12 py-3 mb-6 bg-white text-primary font-semibold'}/>
                    <div className="overlay_share_btns">
                      <Flex className={'items-center space-x-4 justify-center'}>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <IoShareSocial /> 
                          <Heading as={'p'} text={'Share'} className={'ml-[2px]'}/>
                        </div>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <MdCompareArrows /> 
                          <Heading as={'p'} text={'Compare'} className={'ml-[2px]'}/>
                        </div>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <FaRegHeart /> 
                          <Heading as={'p'} text={'Like'} className={'ml-[2px]'}/>
                        </div>
                      </Flex>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product_item relative group">
                <Image
                  imgSrc={Product02}
                  imgAlt={"Product image"}
                  className={""}
                />
                <div className="product_badge absolute top-5 right-5 bg-redBadge text-white font-medium h-12 w-12 rounded-full text-center">
                  <Heading as={"p"} text={"-40%"} className={"leading-[48px]"} />
                </div>
                <div className="product_details p-4 bg-productBg">
                  <Heading as={'p'} text={'Leviosa'} className={'font-semibold text-A3A3 text-2xl'}/>
                  <Heading as={'p'} text={'Stylish cafe chair'} className={'font-medium text-8989'}/>
                  <div className="product_price mb-4">
                    <span className={"font-semibold text-[20px] text-A3A3"}>Rp 2.500.000</span>
                    <span className={'text-B0B0 line-through ml-3'}>Rp 3.500.000</span>
                  </div>
                </div>
                <div className="product_overlay bg-A3A3 opacity-70 absolute top-0 left-0 w-full h-full hidden group-hover:block">
                  <div className="overlay_content text-center relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Button bText={'Add to cart'} className={'px-12 py-3 mb-6 bg-white text-primary font-semibold'}/>
                    <div className="overlay_share_btns">
                      <Flex className={'items-center space-x-4 justify-center'}>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <IoShareSocial /> 
                          <Heading as={'p'} text={'Share'} className={'ml-[2px]'}/>
                        </div>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <MdCompareArrows /> 
                          <Heading as={'p'} text={'Compare'} className={'ml-[2px]'}/>
                        </div>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <FaRegHeart /> 
                          <Heading as={'p'} text={'Like'} className={'ml-[2px]'}/>
                        </div>
                      </Flex>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product_item relative group">
                <Image
                  imgSrc={Product01}
                  imgAlt={"Product image"}
                  className={""}
                />
                <div className="product_badge absolute top-5 right-5 bg-redBadge text-white font-medium h-12 w-12 rounded-full text-center">
                  <Heading as={"p"} text={"-30%"} className={"leading-[48px]"} />
                </div>
                <div className="product_details p-4 bg-productBg">
                  <Heading as={'p'} text={'Syltherine'} className={'font-semibold text-A3A3 text-2xl'}/>
                  <Heading as={'p'} text={'Stylish cafe chair'} className={'font-medium text-8989'}/>
                  <div className="product_price mb-4">
                    <span className={"font-semibold text-[20px] text-A3A3"}>Rp 2.500.000</span>
                    <span className={'text-B0B0 line-through ml-3'}>Rp 3.500.000</span>
                  </div>
                </div>
                <div className="product_overlay bg-A3A3 opacity-70 absolute top-0 left-0 w-full h-full hidden group-hover:block">
                  <div className="overlay_content text-center relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Button bText={'Add to cart'} className={'px-12 py-3 mb-6 bg-white text-primary font-semibold'}/>
                    <div className="overlay_share_btns">
                      <Flex className={'items-center space-x-4 justify-center'}>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <IoShareSocial /> 
                          <Heading as={'p'} text={'Share'} className={'ml-[2px]'}/>
                        </div>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <MdCompareArrows /> 
                          <Heading as={'p'} text={'Compare'} className={'ml-[2px]'}/>
                        </div>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <FaRegHeart /> 
                          <Heading as={'p'} text={'Like'} className={'ml-[2px]'}/>
                        </div>
                      </Flex>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product_item relative group">
                <Image
                  imgSrc={Product02}
                  imgAlt={"Product image"}
                  className={""}
                />
                <div className="product_badge absolute top-5 right-5 bg-greenBadge text-white font-medium h-12 w-12 rounded-full text-center">
                  <Heading as={"p"} text={"New"} className={"leading-[48px]"} />
                </div>
                <div className="product_details p-4 bg-productBg">
                  <Heading as={'p'} text={'Leviosa'} className={'font-semibold text-A3A3 text-2xl'}/>
                  <Heading as={'p'} text={'Stylish cafe chair'} className={'font-medium text-8989'}/>
                  <div className="product_price mb-4">
                    <span className={"font-semibold text-[20px] text-A3A3"}>Rp 2.500.000</span>
                    <span className={'text-B0B0 line-through ml-3'}>Rp 3.500.000</span>
                  </div>
                </div>
                <div className="product_overlay bg-A3A3 opacity-70 absolute top-0 left-0 w-full h-full hidden group-hover:block">
                  <div className="overlay_content text-center relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Button bText={'Add to cart'} className={'px-12 py-3 mb-6 bg-white text-primary font-semibold'}/>
                    <div className="overlay_share_btns">
                      <Flex className={'items-center space-x-4 justify-center'}>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <IoShareSocial /> 
                          <Heading as={'p'} text={'Share'} className={'ml-[2px]'}/>
                        </div>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <MdCompareArrows /> 
                          <Heading as={'p'} text={'Compare'} className={'ml-[2px]'}/>
                        </div>
                        <div className="share_btn text-white font-semibold flex items-center">
                          <FaRegHeart /> 
                          <Heading as={'p'} text={'Like'} className={'ml-[2px]'}/>
                        </div>
                      </Flex>
                    </div>
                  </div>
                </div>
              </div>
            </Flex>
            <div className="show_more_btn mt-8 mb-[75px] text-center">
              <Button bText={'Show More'} className={'px-[74px] py-3 mb-6 bg-white text-primary font-semibold border border-primary'}/>
            </div>
          </div>
        </Container>
      </div>
      {/* Product Section End  */}

      {/* Promotion Section Start  */}
      <div className={"promotion_section font-primary bg-promotionBg py-11 mb-16"}>
        <Container>
          <Flex className={'items-center space-x-8'}>
            <div className="promotion_left">
              <Heading as={'h3'} text={'50+ Beautiful rooms inspiration'} className={'max-w-[420px] font-bold text-A3A3 text-[40px] leading-[120%] mb-2'}/>
              <Heading as={'p'} text={'Our designer already made a lot of beautiful prototipe of rooms that inspire you'} className={'max-w-[370px] font-medium text-6161 leading-[150%] mb-6'}/>
              <Button bText={'Explore More'} className={'px-9 py-3 bg-primary text-white font-semibold'}/>
            </div>
            <div className="promotion_right">
              <Flex className={'space-x-5'}>
                <div className="img-gallery relative">
                  <Image imgSrc={Promotion01}/>
                  <div className="img_details absolute bottom-6 left-6 flex items-end">
                    <div className="img_text p-8 bg-white">
                      <Heading as={'p'} text={'01 - Bed Room'} className={'font-medium text-6161'}/>
                      <Heading as={'h4'} text={'Inner Peace'} className={'font-semibold text-[28px] text-A3A3'}/>
                    </div>
                    <div className="img_icon h-12 w-12 bg-primary text-white flex justify-center items-center">
                     <FaArrowRightLong className=""/>
                    </div>
                  </div>
                </div>
                <div className="img-gallery relative">
                  <Image imgSrc={Promotion02}/>
                  
                </div>
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Promotion Section End  */}

      {/* Footer Section Start  */}
      <div className="footer_section font-primary pt-6">
        <Container className={'max-w-[1133px]'}>
          <Flex className={'justify-between pb-12 border-b border-[#D9D9D9]'}>
            <div className="footer_logo">
              <Image imgSrc={FLogo} className={'mb-12'}/>
              <Heading as={'p'} text={'400 University Drive Suite 200 Coral Gables, FL 33134 USA'} className={'text-F9F9 max-w-[285px]'}/>
            </div>
            <div className="link_part">
              <Heading as={'h6'} text={'Link'} className={'font-medium text-F9F9 mb-12'}/>
              <Flex className={'flex-col font-medium space-y-5'}>
                <Menu mText={'Home'}/>
                <Menu mText={'Shop'}/>
                <Menu mText={'About'}/>
                <Menu mText={'Contact'}/>
              </Flex>
            </div>
            <div className="help_part">
              <Heading as={'h6'} text={'Help'} className={'font-medium text-F9F9 mb-12'}/>
              <Flex className={'flex-col font-medium space-y-5'}>
                <Menu mText={'Payment Options'}/>
                <Menu mText={'Returns'}/>
                <Menu mText={'Privacy Policy'}/>
              </Flex>
            </div>
            <div className="newsletter">
              <Heading as={'h6'} text={'Newsletter'} className={'font-medium text-F9F9 mb-12'}/>
              <div className="newsletter_input flex space-x-4">
                <Heading as={'p'} text={'Enter Your Email Address'} className={'text-F9F9 text-sm border-b border-black'}/>
                <Heading as={'p'} text={'Subscribe'} className={'text-sm uppercase font-medium border-b border-black'}/>
              </div>
            </div>
          </Flex>
          <div className="footer_copyright">
            <Heading as={'p'} text={'2023 furino. All rights reverved'} className={'pt-8 pb-5'}/>
          </div>
        </Container>
      </div>
      {/* Footer Section End  */}
    </>
  );
}

export default App;
