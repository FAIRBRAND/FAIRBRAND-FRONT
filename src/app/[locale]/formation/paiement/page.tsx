import StripeProviderComponent from "./stripe/StripeProvider";
import PaymentForm from "./PaymentForm";

const PaymentPage = () => (
  <StripeProviderComponent>
    <PaymentForm />
  </StripeProviderComponent>
);

export default PaymentPage;
