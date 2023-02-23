import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { Box, Image } from 'native-base';
import { Dimensions } from 'react-native';
import URL from '../private/api/URL';

const Carrusel = ()=> {
    const img = ['banner1.jpeg', 'banner2.jpeg', 'banner3.jpeg', ];
    return(
        <SwiperFlatList
              autoplay
              autoplayDelay={3}
              autoplayLoop
              index={2}
              showPagination

              data={img}
              renderItem={({ item }) => (
                <Box  w={Dimensions.get('window').width} > 
                   <Image  source={{uri: `${URL.BASE_URL}/public/${item}`}}  
                     alt={item}  w={(Dimensions.get('window').width)} resizeMode="stretch" />
                </Box>
              )}
            />
    )
}
export default Carrusel;