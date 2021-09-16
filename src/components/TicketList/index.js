import React from 'react';

import { Button, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { motion } from "framer-motion";

import { ReactComponent as SilverTicket } from '../../assets/images/silverTicket.svg';
import { ReactComponent as GoldTicket } from '../../assets/images/goldTicket.svg';
import { ReactComponent as DiamondTicket } from '../../assets/images/diamondTicket.svg';
import { ReactComponent as UnknownSilverTicket } from '../../assets/images/unknownSilverTicket.svg';

import './styles.scss';

const mapStateToProps = state => ({
  raffleCount: state.appReducers.raffleCount,
});

const TicketList = ({ raffleCount, onViewportBoxUpdate }) => {
  const { silver, gold, diamond } = raffleCount || {}
  return (
    <div className="ticketListWrapper">
      <Row className="header">
        <span className="headerText">Get More Ticket</span>
        <Button>Buy</Button>
      </Row>
      <Row className="m-0">
        <Col md="12" className="d-flex justify-content-center align-items-center">
          <motion.div
            className="box mt-3 mb-2"
            layoutId="box"
            initial={false}
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            dragElastic={1}
            onViewportBoxUpdate={e => onViewportBoxUpdate(e, 'silver')}
          >
            { silver > 0 ? <SilverTicket /> : <UnknownSilverTicket />}
          </motion.div>
          <div className="ticketCount">{silver || 0}</div>
        </Col>
        <Col md="12" className="d-flex justify-content-center align-items-center">
          <motion.div
            className="box my-2"
            layoutId="box"
            initial={false}
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            dragElastic={1}
          >
            { gold > 0 ? <GoldTicket /> : <UnknownSilverTicket />}
          </motion.div>
          <div className="ticketCount">{gold || 0}</div>
        </Col>
        <Col md="12" className="d-flex justify-content-center align-items-center">
          <motion.div
            className="box my-2"
            layoutId="box"
            initial={false}
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            dragElastic={1}
          >
            { diamond > 0 ? <DiamondTicket /> : <UnknownSilverTicket />}
          </motion.div>
          <div className="ticketCount">{diamond || 0}</div>
        </Col>
      </Row>
    </div>
  )
}

export default connect(mapStateToProps, null)(TicketList);