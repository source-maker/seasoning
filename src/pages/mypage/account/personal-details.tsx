import { Container } from '@mui/material';
import type { NextPage } from 'next';
import { EditCustomerInfoForm } from '@/features/account/EditCustomerInfoForm';
import { BrothTypography } from '@/components/typography/BrothTypography';

const MemberDetails: NextPage = () => {
  return (
    <Container>
      <BrothTypography variant="h2" component="h1">
        Personal Information
      </BrothTypography>

      <EditCustomerInfoForm />
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default MemberDetails;
