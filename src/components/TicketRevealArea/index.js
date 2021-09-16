import React, { useEffect, useState } from 'react';

import { Button, Col, Row } from 'reactstrap';
import { motion } from 'framer-motion';
import { connect } from 'react-redux';

import { ReactComponent as Ticket } from '../../assets/images/ticket.svg';
import { ReactComponent as UnknownTicket } from '../../assets/images/unknownTicket.svg';
import { ReactComponent as SilverTicket } from '../../assets/images/silverTicket.svg';
import { ReactComponent as GoldTicket } from '../../assets/images/goldTicket.svg';
import { ReactComponent as DiamondTicket } from '../../assets/images/diamondTicket.svg';
import RaffleResult from '../RaffleResult';

import { appActions } from '../../redux/actions';
import './styles.scss';

const mapStateToProps = state => ({
  raffleResult: state.appReducers.raffleResult,
});

const mapDispatchToProps = dispatch => ({
  updateRaffleResult: status => dispatch(appActions.updateRaffleResult(status)),
});

const TicketRevealArea = ({ onViewportBoxUpdate, selectedTicket, updateRaffleResult, raffleResult }) => {
  const [_selectedTicket, setSelectedTicket] = useState();
  const [_raffleResult, setRaffleResult] = useState();

  useEffect(() => {
    if (selectedTicket !== _selectedTicket) {
      setSelectedTicket(selectedTicket);
      updateRaffleResult((Math.random()>=0.5)? 'success' : 'failed');
    }
  }, [selectedTicket])

  useEffect(() => {
    if(JSON.stringify(raffleResult) !== JSON.stringify(_raffleResult)) {
      setRaffleResult(raffleResult);
    }
  }, [raffleResult]);
  
  const renderTicket = () => {
    if (_selectedTicket === 'silver') {
      return <SilverTicket />
    } else if (_selectedTicket === 'gold') {
      return <GoldTicket />
    } else if (_selectedTicket === 'diamond') {
      return <DiamondTicket />
    } else {
      return <UnknownTicket />
    }
  }

  return (
    <div className="ticketRevealAreaWrapper pt-5">
      {
        _raffleResult ? (<RaffleResult />) : (
          <div className="dropAreaSectionWrapper">
            <Row>
              <span className="title">Collectors Event</span>
            </Row>
            <Row>
              <span className="subTitle">Participate and win high quality currated NFTs</span>
            </Row>
            <Row className="dropAreaWrapper">
              <motion.div className="dropArea" onViewportBoxUpdate={onViewportBoxUpdate}>
                {renderTicket()}
                <span className="dragDescription mt-4">Drag a ticket or use the button below to draw your tickets</span>
              </motion.div>
            </Row>
          </div>
        )
      }
      <div className="drawPanel px-5">
        <Ticket />
        <Col md="8" className="px-2">
          <Row>
            <span className="drawTicketText">Draw Ticket</span>
          </Row>
          <Row>
            <span className="ticketFoundText"><span className="ticketCount">10</span> Tickets found</span>
          </Row>
          <Row className="mt-2 drawDescription">
            <span>Open your tickets and get a chance to win $1000 worth of high quality NFTs!  <span className="learnMoreText">Learn More</span></span>
          </Row>
        </Col>
        <Col>
          <div className="drawTicketPanel">
            <span>Silver Ticket(1)</span>
          </div>
          <Row>
            <Button className="drawTicketButton mt-3">Draw Ticket</Button>
          </Row>
        </Col>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketRevealArea);