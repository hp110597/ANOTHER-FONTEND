import { Container, Box, styled, Grid, List, ListItem } from '@mui/material'
import Image from '../../../components/image'
import Text from '../../../components/Text'
import React, { useMemo, useCallback, useState, useEffect } from 'react';
import Button from '../../../components/Button'
import { MobileStepper } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Stack } from '@mui/system';
import styles from './style.module.css'

const listKOLs = [
    {
        image: "/images/partner1.png",
        title: "Cáo nhỏ 1",
        content: "This is Cáo Nhỏ description. A leading hight-end, multi-sector architectural design practice. A digital marketing agency. I worked with Starberry to re-design their website, which continues to grow and evolve."
    },
    {
        image: "/images/partner1.png",
        title: "Cáo nhỏ 2",
        content: "This is Cáo Nhỏ description. A leading hight-end, multi-sector architectural design practice. A digital marketing agency. I worked with Starberry to re-design their website, which continues to grow and evolve."
    },
    {
        image: "/images/partner1.png",
        title: "Cáo nhỏ 3",
        content: "This is Cáo Nhỏ description. A leading hight-end, multi-sector architectural design practice. A digital marketing agency. I worked with Starberry to re-design their website, which continues to grow and evolve."
    },
    {
        image: "/images/partner1.png",
        title: "Cáo nhỏ 4",
        content: "This is Cáo Nhỏ description. A leading hight-end, multi-sector architectural design practice. A digital marketing agency. I worked with Starberry to re-design their website, which continues to grow and evolve."
    },
    {
        image: "/images/partner1.png",
        title: "Cáo nhỏ 5",
        content: "This is Cáo Nhỏ description. A leading hight-end, multi-sector architectural design practice. A digital marketing agency. I worked with Starberry to re-design their website, which continues to grow and evolve."
    },
    {
        image: "/images/partner1.png",
        title: "Cáo nhỏ 6",
        content: "This is Cáo Nhỏ description. A leading hight-end, multi-sector architectural design practice. A digital marketing agency. I worked with Starberry to re-design their website, which continues to grow and evolve."
    }];


const Kols = () => {
    const [screenWidth, setScreenWidth] = useState(0);
    useEffect(() => {
        setScreenWidth(screen.width);
    }, []);
    const [activeStep, setActiveStep] = useState(0);
    const LIST_KOLS = useMemo(() => {
        return listKOLs.map((item, index) => {
            if (activeStep !== index) {
                return null;
            }
            return <ListItem key={index}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: "center",
                    alignItems: 'center',
                    flexDirection: { xs: 'column', sm: 'row' },
                    marginTop: '5%',
                    width: "80vw",
                }}>
                    <Image
                        imagePath={item.image}
                        width={screenWidth * 0.3}
                        height={0.3 * screenWidth}
                        hoverEnabled={false}
                        isCircleAround={true}
                        startY={'10%'}
                        endY={'0%'}
                    />
                    <Box sx={{
                        maxWidth: '45vw',
                        marginTop: '2%',
                        marginLeft: '5%'
                    }}>
                        <Text
                            content={item.title}
                            fontSize={{ xs: '20px', sm: '32px' }}
                            textAlign={{ xs: 'center', sm: 'justify' }}
                            startY={'100%'}
                            endY={'0%'}
                            duration={'0.5s'}
                            bold
                        />
                        <br />
                        <Text
                            content={item.content}
                            fontSize={{ xs: '12px', sm: '20px' }}
                            lineHeight={{ xs: '30px', sm: '40px' }}
                            textAlign={{ xs: 'center', sm: 'justify' }}
                            startY={'100%'}
                            endY={'0%'} />
                    </Box>
                </Box>
            </ListItem>
        })
    }, [activeStep, screenWidth])
    const handleNext = useCallback(() => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }, []);

    const handleBack = useCallback(() => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }, []);
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                height: "100vh",
                alignItems: "center",
            }}
        >
            <Box
            >
                <Box>
                    <Text
                        content={'KOLs'}
                        fontSize={{ sm: '40px', xs: '30px' }} />
                </Box>
                <Box sx={{ width: "80vw", overflow: "hidden" }}>
                    <List direction={'row'} component={Stack}>
                        {LIST_KOLS}
                    </List>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '10vh'
                }}>
                    <MobileStepper
                        variant="progress"
                        steps={listKOLs.length}
                        position="static"
                        activeStep={activeStep}
                        sx={{
                            maxWidth: '60%',
                            flexGrow: 1,
                            background: 'none',
                        }}
                        LinearProgressProps={{
                            color: 'inherit',
                            sx: {
                                height: '2px',
                                width: '85%'
                            }
                        }}
                        nextButton={
                            <Button
                                fontSize={'32px'}
                                backgroundColor={'none'}
                                hoverBackground={'#FFFFFF'}
                                boder={'none'}
                                textColor={'#000000'}
                                borderRadius={'50%'}
                                onClick={handleNext}
                                disabled={activeStep === listKOLs.length - 1}
                                Icon={<KeyboardArrowRight sx={{ fontSize: 32 }} />}>
                            </Button>
                        }
                        backButton={
                            <Button
                                fontSize={'32px'}
                                backgroundColor={'none'}
                                hoverBackground={'#FFFFFF'}
                                border={'none'}
                                textColor={'#000000'}
                                borderRadius={'50%'}
                                onClick={handleBack}
                                disabled={activeStep === 0}
                                Icon={<KeyboardArrowLeft sx={{ fontSize: 32 }} />}
                            >

                            </Button>
                        }
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default Kols