import React, { useEffect, useState, useRef } from 'react';

import { Col, Row } from 'reactstrap';
import { AnimateSharedLayout } from "framer-motion";
import { connect } from 'react-redux';

import { TicketList, TicketRevealArea } from '../../components';

import './styles.scss';

const mapStateToProps = state => ({
  raffleResult: state.appReducers.raffleResult,
});

const RaffleReveal = ({ raffleResult }) => {
  const viewportWidth = useViewportWidth();
  const [selectedTicket, setSelectedTicket] = useState();

  const onViewportBoxUpdate = ({ x }, type) => {
    const halfViewport = viewportWidth.current / 2;

    if (x.min > halfViewport) {
      setSelectedTicket(type);
    }
  };

  return (
    <Row className="raffleRevealWrapper">
      <AnimateSharedLayout>
        <Col md="3" className="p-5">
          <TicketList onViewportBoxUpdate={onViewportBoxUpdate} />
        </Col>
        <Col md="9" className="ticketRevealSectionAreaWrapper">
          <TicketRevealArea selectedTicket={selectedTicket} onViewportBoxUpdate={onViewportBoxUpdate} />
        </Col>
      </AnimateSharedLayout>
    </Row>
  )
}

function useViewportWidth() {
  const viewportWidth = useRef(0);

  useEffect(() => {
    const updateViewportWidth = () => {
      viewportWidth.current = window.innerWidth;
    };

    updateViewportWidth();

    window.addEventListener("resize", updateViewportWidth);
  }, []);

  return viewportWidth;
}

export default connect(mapStateToProps, null)(RaffleReveal);