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
}

const images: ImageMetadata[] = [
  {
    driveId: "11gmLZG42vC9LSJzBmFsaB3iJRvPZsjQv",
    title: "Titulo",
    message: "blablablable"
  },
  {
    driveId: "1t06CCXTGYCG9tON0bdS4W3DmClKGy9aM",
    title: "Titulo",
    message: "blablablable"
  },
  {
    driveId: "1cqlHY9OT-QEGzLnSwovBbZLqynx__WJB",
    title: "Titulo",
    message: "blablablable"
  },
  {
    driveId: "1EppwVFUaP3PECsissS39K7aEZarV9CnX",
    title: "Titulo",
    message: "blablablable"
  },
  {
    driveId: "1QDZzO7UHNoxhsw0LLBXDqlbb97nS6EVg",
    title: "Titulo",
    message: "blablablable"
  },
  {
    driveId: "1QJ1-1u3ZvGfx9JEGxrUGBM8i6Egku8k8",
    title: "Titulo",
    message: "blablablable"
  },
  {
    driveId: "1Nw4dNCqdCeYs8CAAHhQ2gV2HqDzHSCP1",
    title: "Titulo",
    message: "blablablable"
  },
  {
    driveId: "1v-rShy5_3e5qrHTnFyHlS1NCMABfd4qr",
    title: "Titulo",
    message: "blablablable"
  },
  {
    driveId: "1J7wc01_r-PqHB3wNZ0GmNXcXpnyd778R",
    title: "Titulo",
    message: "blablablable"
  },
  {
    driveId: "1GanPFB81HJj9UdusDm-aTed-SAA7p8dR",
    title: "Titulo",
    message: "blablablable"
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
          initialSlide={1}
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
                <Box textAlign="left">
                  <Text fontWeight="bold" fontSize="2xl">{image.title}</Text>
                  <Text>{image.message}</Text>
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
