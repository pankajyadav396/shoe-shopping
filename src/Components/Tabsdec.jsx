import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Container from 'react-bootstrap/Container';
export const Tabsdec = () => {
    return (
        <Container className='mt-5 pt-5' id='DAG'>
        <Tabs>
            <TabList className="d-flex gap-4 p-0 overflow-scroll-x">
                <Tab className="fs-2md fw-normal pointer ff-poppins lh-125 me-sm-5 pb-1">DESCRIPTION</Tab>
                <Tab className="fs-2md fw-normal pointer ff-poppins text-nowrap lh-125 me-sm-5 pb-1">ADDITIONAL INFORMATION</Tab>
                <Tab className="fs-2md fw-normal pointer ff-poppins text-nowrap lh-125 pb-1">REVIEWS (1)</Tab>
            </TabList>

            <TabPanel>
                <h2 className='fs-2md text-light-black1 ff-poppins fw-normal lh-185'>Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla in leo ullamcorper, in finibus elit porta. Sed eget congue neque, mattis finibus neque. In vel dolor ac augue pretium suscipit. Ut nec massa in ligula vestibulum mattis. Suspendisse imperdiet lorem eleifend nisi euismod, vel consequat ipsum luctus. Morbi auctor vulputate hendrerit. Etiam vel lectus tortor. Pellentesque non pharetra mi. Cura
                </h2>
            </TabPanel>
            <TabPanel>
                <h2 className='fs-2md text-light-black1 ff-poppins fw-normal lh-185'>Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla in leo ullamcorper, in finibus elit porta. Sed eget congue neque, mattis finibus neque. In vel dolor ac augue pretium suscipit. Ut nec massa in ligula vestibulum mattis. Suspendisse imperdiet lorem eleifend nisi euismod, vel consequat ipsum luctus. Morbi auctor vulputate hendrerit. Etiam vel lectus tortor. Pellentesque non pharetra mi. Cura </h2>
            </TabPanel>
            <TabPanel>
                <h2 className='fs-2md text-light-black1 ff-poppins fw-normal lh-185'>Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla in leo ullamcorper, in finibus elit porta. Sed eget congue neque, mattis finibus neque. In vel dolor ac augue pretium suscipit. Ut nec massa in ligula vestibulum mattis. Suspendisse imperdiet lorem eleifend nisi euismod, vel consequat ipsum luctus. Morbi auctor vulputate hendrerit. Etiam vel lectus tortor. Pellentesque non pharetra mi. Cura </h2>
            </TabPanel>
            </Tabs>
        </Container>
    )
}
