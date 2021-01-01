import FusePageCarded from "@fuse/core/FusePageCarded";
import React, { useState } from "react";
import AreasHeader from "./AreasHeader";
import AreasTable from "./AreasTable";
import AreasDialog from "./AreasDialog";

function Areas() {
  const [isOpenAreaDialog, setOpenAreaDialog] = useState(false);
  const [currentArea, setCurrentLanguage] = useState({});
  const [searchText, setSearchText] = useState("");

  function handleOpenAreaDialog() {
    setOpenAreaDialog(true);
    setCurrentLanguage({});
  }

  function handleCloseAreaDialog() {
    setOpenAreaDialog(false);
  }
  function handleCurrentArea(area) {
    setCurrentLanguage(area);
    setOpenAreaDialog(true);
  }
  function handleSearchText(value) {
    setSearchText(value);
  }

  return (
    <React.Fragment>
      <FusePageCarded
        classes={{
          content: "flex",
          contentCard: 'overflow-hidden',
          header: "min-h-72 h-72 sm:h-136 sm:min-h-136"
        }}
        header={<AreasHeader isOpenAreaDialog={handleOpenAreaDialog} searchText={handleSearchText} />}
        content={<AreasTable currentArea={handleCurrentArea} searchText={searchText} />}
        innerScroll
      />
      {isOpenAreaDialog && <AreasDialog open={isOpenAreaDialog} close={handleCloseAreaDialog} area={currentArea} />}
    </React.Fragment>
  );
}

export default Areas;
