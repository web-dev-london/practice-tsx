import { Box, Button, Heading, Text} from "@chakra-ui/react"
import LocalStorage from "./LocalStorage"
import './style.css'

const LightDarkMode = () => {
    const [theme, setTheme] = LocalStorage('mode', 'dark');

    const handleClicked = () => { 
        setTheme(theme === 'light' ? 'dark' : 'light')
     }

  return (
    <>
        <Box
        className="toggleMode"
        data-theme={theme}
        >
            <Heading
            as={'h2'}
            fontSize={'18px'}
            mb={'2rem'}
            >
                Light Dark Mode 
            </Heading>
            <Text
            as={'p'}
            mb={'1rem'}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit explicabo recusandae laudantium quasi fugiat asperiores quas voluptates ipsa. Aut, voluptatem quae? Soluta quam maxime facere veniam eos laboriosam adipisci accusamus.
                Earum eaque voluptatibus ratione unde distinctio nemo cumque quas. Quasi expedita incidunt illum ullam sequi explicabo quis odio, modi molestiae deserunt, numquam perferendis, minima nihil maxime ut tempore dolores enim.
                Soluta sequi voluptate qui odit aliquam nihil maxime odio sunt incidunt et quis voluptatum fugit ipsam labore consequatur quasi, expedita hic. Consequatur eligendi quibusdam obcaecati quam perferendis quaerat delectus autem.
                Iure, quibusdam accusamus repudiandae animi repellat provident incidunt optio consequuntur iusto laudantium beatae modi repellendus itaque blanditiis earum perspiciatis. Animi voluptatibus porro vero, optio error officia natus placeat necessitatibus nobis.
                Omnis sed fugit labore reiciendis rerum fuga voluptatum aliquam voluptates, et cumque pariatur libero in nam officiis ab! Sed ullam dicta culpa autem recusandae perferendis distinctio voluptas pariatur esse facilis?
            </Text>
            <Button
            as={'button'}
            colorScheme="purple"
            onClick={handleClicked}
            >
                Change Mode
            </Button>
        </Box>
    </>
  )
}

export default LightDarkMode