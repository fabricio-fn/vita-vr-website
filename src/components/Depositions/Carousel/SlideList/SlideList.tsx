import { StyleParagraph } from "../../../Paragraph/StyleParagraph";
import { StyleTitle } from "../../../Title/StyleTitle";
import { SlideData } from "../SlideData/SlideData";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function SlideList() {
    return (
        <>
            <Swiper
                spaceBetween={100}
                slidesPerView={1}
            >
                {SlideData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <li>
                            <StyleParagraph fontSize="sm">{item.comment}</StyleParagraph>
                            <div>
                                <StyleTitle tag="h3" fontSize="md">
                                    <strong>{item.name}</strong>
                                </StyleTitle>
                                <StyleParagraph fontSize="sm">{item.local}</StyleParagraph>
                            </div>
                        </li>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}