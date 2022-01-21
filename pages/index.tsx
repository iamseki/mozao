import { Box, Flex, Image, Text, Icon } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { NextPage } from 'next'
import { FaRegKissWinkHeart, FaRegGrinHearts } from 'react-icons/fa'
// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow, Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

interface ImageMetadata {
  driveId: string
  title: string
  message: string
  textColor?: string
}

const images: ImageMetadata[] = [
  {
    driveId: "11gmLZG42vC9LSJzBmFsaB3iJRvPZsjQv",
    title: "Amorzão",
    message: "Parabéns, você merece o mundo mas vai ter que se contentar com esse site :D"
  },
  {
    driveId: "1t06CCXTGYCG9tON0bdS4W3DmClKGy9aM",
    title: "Obrigado",
    message: "Por ser a melhor mamãe do mundo!"
  },
  {
    driveId: "1cqlHY9OT-QEGzLnSwovBbZLqynx__WJB",
    title: "Você",
    message: "É a melhor namorada do mundo."
  },
  {
    driveId: "1QDZzO7UHNoxhsw0LLBXDqlbb97nS6EVg",
    title: "É",
    message: "A melhor noiva também."
  },
  {
    driveId: "1QJ1-1u3ZvGfx9JEGxrUGBM8i6Egku8k8",
    title: "A",
    message: "Pessoa mais maravilinda."
  },
  {
    driveId: "1Nw4dNCqdCeYs8CAAHhQ2gV2HqDzHSCP1",
    title: "Razão",
    message: "Da nossa alegria."
  },
  {
    driveId: "1v-rShy5_3e5qrHTnFyHlS1NCMABfd4qr",
    title: "Da",
    message: "Nossa vida."
  },
  {
    driveId: "1J7wc01_r-PqHB3wNZ0GmNXcXpnyd778R",
    title: "Minha",
    message: "Melhor companheira."
  },
  {
    driveId: "1GanPFB81HJj9UdusDm-aTed-SAA7p8dR",
    title: "Existência",
    message: "Que colocamos juntos no mundo e que sou grato de ter tido a sorte de ter sido com você, te amo!",
    textColor: "gray.800"
  },
]

const Home: NextPage = () => {
  return (
    <Flex
      direction="column"
      w="100vw"
      h="100vh"
    >
      <Flex w="100%" h="10%" align="center" justify="center" mt={["6", "12"]}>
        <Icon as={FaRegKissWinkHeart} fontSize="32" color="pink.500" mr={["2", "6"]} />
        <Text
          bgGradient='linear(to-l, #7928CA, #FF0080, #7928CA)'
          bgClip='text'
          fontSize={["3xl", "6xl"]}
          fontWeight='extrabold'
        >
          Parabéns Amorzão
        </Text>
        <Icon as={FaRegKissWinkHeart} fontSize="32" color="pink.500" ml={["2", "6"]} />
      </Flex>
      <Flex h="100%" align="center" justify="center">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            "rotate":
              50,
            "stretch":
              0,
            "depth":
              100,
            "modifier":
              1,
          }}
          pagination={true}
          className="mySwiper"
          style={{
            width: "100%",
            paddingBottom: "50px",
          }}
        >
          {images.map(image => (
            <SwiperSlide
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "300px",
                height: "300px"
              }}
              key={image.driveId}
            >
              <Box boxSize='sm' position="absolute">
                <Image src={`https://drive.google.com/u/0/uc?id=${image.driveId}&export=download`} alt='one' w="80%" h="80%" />
              </Box>
              <Flex position="absolute" w="100%" h="100%" direction="column" justify="flex-end" align="center">
                <Box textAlign="left" ml={["2","4"]}>
                  <Text color={image.textColor ?? "white"} fontWeight="bold" fontSize="2xl">{image.title}</Text>
                  <Text color={image.textColor ?? "white"}>{image.message}</Text>
                </Box>
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
      <Flex w="100%" h="10%" align="center" justify="center" mb={["6", "10"]}>
        <Icon as={FaRegGrinHearts} fontSize="32" color="pink.500" ml={["2", "6"]} />
      </Flex>
    </Flex>
  )
}

export default Home
