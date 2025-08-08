type Props = {
  params: {
    id: string;
  };
};

const TicketPage = ({ params }: Props) => {
  return (
    <div>Ticketpage {params.id}</div>
  );
};

export default TicketPage;