import React, { useState } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import styles from './Format.module.css';
import CloseIcon from '@mui/icons-material/Close';

function Format({ initState, setVisible, updateInvoice }) {
  const [showMessage, setShowMessage] = useState(true);
  const allow = () => {
    setVisible(false);
    setShowMessage(false);
  };

  // var TableDetailsInvoiceUpdateMap = [];
  // if (updateInvoice.length > 0) {
  //   {
  //     TableDetailsInvoiceUpdateMap = updateInvoice.map((data, idx) => (
  //       <>
  //         <div className={styles.icon}>
  //           {idx === 0 && <CloseIcon fontSize='large' onClick={allow} />}
  //         </div>
         
  //       </>
  //     ));
  //   }
  // } else {
  //   TableDetailsInvoiceUpdateMap = '';
  // }

  return (
    showMessage && (
      <Timeline>
        <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant='outline' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className={styles.titre}>title</div>
              <div className={styles.sous_titre}>date</div>
              <div className={styles.boxe}>
                <p> details</p>
              </div>
            </TimelineContent>
          </TimelineItem>
      </Timeline>
    )
  );
}

export default Format;
