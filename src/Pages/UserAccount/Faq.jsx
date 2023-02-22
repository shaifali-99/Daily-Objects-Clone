import { AddIcon, MinusIcon } from "@chakra-ui/icons"
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Heading, Stack } from "@chakra-ui/react"

export const Faq = () =>{
    const faqList=[
        {title:"Can I change the products in my order?",
        content:"Yes, you can change the products in an order after it is confirmed, but only before the shipment has taken place. At the Support Forum, raise a query mentioning your order ID along with the link of the products that need to be added instead."
        },
        {title:"How can I change the address or phone number in an order?",
        content:"It is possible to change the shipping address of a confirmed order, only before the order has been shipped (packed and left the warehouse). At the Support Forum, raise a query mentioning your order ID along with the new shipping address. In Description, add address in the following order, Name, Address (House Number, Society/ Area, City, Pin Code), Mobile no."
        },
        {title:"What do I do if the payment has failed?",
        content:"DailyObjects takes 48hrs to confirm an order. If an order has not been confirmed within the prescribed time, please raise a query at the Support Forum or contact us at +91 8010667667, Monday to Saturday, between 9am to 6pm."
        },
        {title:"Where will the refund be credited?",
        content:"The refund amount will be credited to the source bank account, incase of a prepaid order. When you cancel a Cash On Delivery order, we ask for the account details where you would like the amount to be credited."
        },
    ]
    return <div style={{padding:"1rem"}}>
            <Stack align={'center'} >
            <Heading fontSize={'4xl'} marginBottom={'1rem'}>FAQ</Heading>
            </Stack>
            <Accordion allowMultiple>
                {faqList.map((e)=>{
                    return <AccordionItem padding={"1rem"} margin="0.5rem">
                    {({ isExpanded }) => (
                    <>
                        <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left' fontWeight={"700"}>
                            {e.title}
                            </Box>
                            {isExpanded ? (
                            <MinusIcon fontSize='12px' />
                            ) : (
                            <AddIcon fontSize='12px' />
                            )}
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        {e.content}
                        </AccordionPanel>
                    </>
                    )}
                </AccordionItem>
                })}
                
    </Accordion>
    </div>
}