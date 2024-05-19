import React, { useState } from "react";
import {
  Calendar as BigCalendar,
  momentLocalizer,
  CalendarProps,
} from "react-big-calendar";
import moment from "moment";
import Modal from "../../components/Modal";
import EventModal from '../../components/EventModal'

const localizer = momentLocalizer(moment);

function CalendarTitle(props) {
  const [openModal, setOpenModal] = useState(false);
  const handleModalOpen = () => {
    setOpenModal(true);
  };

  return (
    <>
      <BigCalendar
        {...props}
        localizer={localizer}
        onDoubleClickEvent={handleModalOpen}
      />
      {openModal && (
        <Modal isOpen={openModal} onClose={() => setOpenModal(false)} quiz={true}>
          <EventModal onClose={() => setOpenModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default CalendarTitle;