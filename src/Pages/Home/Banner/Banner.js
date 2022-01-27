import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        imgPath:
            'https://live.staticflickr.com/7303/8748614818_8af7952535.jpg',
    },
    {
        imgPath:
            'https://th.bing.com/th/id/OIP.0Rw62GZerlUef2Omcwat_wHaFj?pid=ImgDet&rs=1',
    },
    {
        imgPath:
            'https://th.bing.com/th/id/OIP.ojjgRRilZS_o4ZDy4YsVdwHaE8?pid=ImgDet&w=600&h=400&rs=1',
    },
    {
        imgPath:
            'https://th.bing.com/th/id/OIP.PVz_QjegGm4PHCDHVx4pOAHaD_?pid=ImgDet&rs=1',
    },
];
const Banner = () => {


    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ maxWidth: "80%", flexGrow: 1, mx: "auto" }}>

            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    height: "80vh",
                                    display: 'block',
                                    maxWidth: "100%",
                                    overflow: 'hidden',
                                    width: '100%',
                                    mx: "auto"
                                }}
                                src={step.imgPath}
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
        </Box>
    );
};

export default Banner;