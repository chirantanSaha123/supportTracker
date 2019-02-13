export const statusAll = [
    {value:'stats_pendingInvestigation',label:'Pending Investigation'},
    {value:'stats_closed',label:'Closed'},
    {value:'stats_fixRequired',label:'Fix required'},
    {value:'stats_rfcScheduled',label:'RFC scheduled'}

  ];

  export const categories = [
    {label:"Vendor Related",value:"issue_vendorRelated"},
    {label:"Elligibility",value:"issue_elligibility"},
    {label:"Enrollment",value:"issue_enrollment"},
    {label:"Loan Request",value:"issue_loanRequest"},
    {label:"Other Payment Modes",value:"issue_otherPaymentModes"},
    {label:"Payment",value:"issue_payment"},
    {label:"Deloitte",value:"issue_deloitte"},
    {label:"MFPA",value:"issue_mfpa"},
    {label:"WCT Dashboard",value:"issue_WCTDashboard"},
    {label:"service Request",value:"issue_serviceRequest"},
    {label:"System Scynching Issues",value:"issue_systemScynchingIssues"},
    {label:"OTB Issues",value:"issue_otbIssues"},
    {label:"Linkakge",value:"issue_linkage"},
    {label:"MYCA Id",value:"issue_mycaID"}
  ];

  
export const teams =[
    {value:'teams_cfe',label:'CFE'},
    {value:'teams_clp',label:'CLP'},
    {value:'teams_myca',label:'MYCA'},
    {value:'teams_dxp',label:'DXP'},
    {value:'teams_biz',label:'Business'},
    {value:'teams_risk',label:'RISK'},
    {value:'teams_fraud',label:'FRAUD'},
    {value:'teams_gcap',label:'GCAP'},
    {value:'teams_crpsDqme',label:'CRPS/DQME'},
    {value:'teams_bdp',label:'BDP'},
    {value:'teams_emm',label:'EMM'},
    {value:'teams_servicing',label:'SERVICING'},
    {value:'teams_csp',label:'CSP'},
    {value:'teams_cas',label:'CAS'}
    
    ];

    export const reasons =[
        {value:'reasn_pendingInvestigation',label:'Under Investigation'},
        {value:'reasn_awaitingServicingForInput',label:'Awaiting Servicing input'},
        {value:'reasn_awaitingClosureConfirmation',label:'Awaiting closure conf'},
        {value:'reasn_missingCapability',label:'Missing Capability'}
    ];

    export const allFilters =[
      {value:'CFE',label:'Assigned to CFE'},
      {value:'CLP',label:'Assigned to CLP'},
      {value:'MYCA',label:'Assigned to MYCA'},
      {value:'DXP',label:'Assigned to DXP'},
      {value:'BIZ',label:'Assigned to Business'},
      {value:'RISK',label:'Assigned to RISK'},
      {value:'FRAUD',label:'Assigned to FRAUD'},
      {value:'GCAP',label:'Assigned to GCAP'},
      {value:'CRPS',label:'Assigned to CRPS/DQME'},
      {value:'BDP',label:'Assigned to BDP'},
      {value:'EMM',label:'Assigned to EMM'},
      {value:'SVC',label:'Assigned to Servicing'},
      {value:'CSP',label:'Assigned to CSP'},
      {value:'CAS',label:'Assigned to CAS'},
      {value:'OTHERS',label:'Assigned to OTHERS'},
      {value:'ALL',label:'No filters'}
      
    ];