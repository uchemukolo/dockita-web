import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from '../../helpers/AsyncFunc';
// import { google, getTheme } from '../../settings';
import { history } from '../../redux/store';

const routes = [
  {
    path: '',
    component: asyncComponent(() => import('../Home')),
  },
  {
    path: 'dashboard',
    component: asyncComponent(() => import('../Dashboard/Dashboard')),
  },
  // {
  //   path: 'leads',
  //   component: asyncComponent(() => import('../leads/leads')),
  // },
  // {
  //   path: 'leads/:managerId/:clientId',
  //   component: asyncComponent(() => import('../leads/lead/lead')),
  // },
  // {
  //   path: 'leads/:managerId/:clientId/edit',
  //   component: asyncComponent(() => import('../leads/lead/editManager')),
  // },
  // {
  //   path: 'companies',
  //   component: asyncComponent(() => import('../clients/companies/companies')),
  // },
  // {
  //   path: 'companies/:id',
  //   component: asyncComponent(() => import('../clients/companies/company/company')),
  // },
  // {
  //   path: 'companies/:id/edit',
  //   component: asyncComponent(() => import('../clients/companies/company/editCompany')),
  // },
  // {
  //   path: 'units',
  //   component: asyncComponent(() => import('../clients/units/units')),
  // },
  // {
  //   path: 'units/:id',
  //   component: asyncComponent(() => import('../clients/units/unit/client')),
  // },
  // {
  //   path: 'units/:id/edit',
  //   component: asyncComponent(() => import('../clients/units/unit/editClient')),
  // },
  // {
  //   path: 'units/:id/invoices/:invoiceId',
  //   component: asyncComponent(() => import('../clients/units/unit/invoices/invoice/invoice')),
  // },
  // {
  //   path: 'units/:id/managers/:managerId',
  //   component: asyncComponent(() => import('../clients/units/unit/managers/manager/manager')),
  // },
  // {
  //   path: 'units/:id/managers/:managerId/edit',
  //   component: asyncComponent(() => import('../clients/units/unit/managers/manager/editManager')),
  // },
  // {
  //   path: 'units/:id/accreditations/:accreditationId',
  //   component: asyncComponent(() => import('../clients/units/unit/accreditations/accreditation/accreditation')),
  // },
  // {
  //   path: 'units/:id/bankAccounts/:bankAccountId',
  //   component: asyncComponent(() => import('../clients/units/unit/bankAccounts/bankAccount/bankAccount')),
  // },
  // {
  //   path: 'units/:id/credits/:creditId',
  //   component: asyncComponent(() => import('../clients/units/unit/credits/credit/credit')),
  // },
  // {
  //   path: 'units/:id/cards/:cardId',
  //   component: asyncComponent(() => import('../clients/units/unit/cards/card/card')),
  // },
  // {
  //   path: 'subUnits',
  //   component: asyncComponent(() => import('../clients/subUnits/subUnits')),
  // },
  // {
  //   path: 'subUnits/:id',
  //   component: asyncComponent(() => import('../clients/subUnits/subUnit/subUnit')),
  // },
  // {
  //   path: 'subUnits/:id/edit',
  //   component: asyncComponent(() => import('../clients/subUnits/subUnit/editSubUnit')),
  // },
  // {
  //   path: 'subUnits/:id/invoices/:invoiceId',
  //   component: asyncComponent(() => import('../clients/subUnits/subUnit/invoices/invoice/invoice')),
  // },
  // {
  //   path: 'subUnits/:id/managers/:managerId',
  //   component: asyncComponent(() => import('../clients/subUnits/subUnit/managers/manager/manager')),
  // },
  // {
  //   path: 'subUnits/:id/managers/:managerId/edit',
  //   component: asyncComponent(() => import('../clients/subUnits/subUnit/managers/manager/editManager')),
  // },
  // {
  //   path: 'subUnits/:id/accreditations/:accreditationId',
  //   component: asyncComponent(() => import('../clients/subUnits/subUnit/accreditations/accreditation/accreditation')),
  // },
  // {
  //   path: 'subUnits/:id/bankAccounts/:bankAccountId',
  //   component: asyncComponent(() => import('../clients/subUnits/subUnit/bankAccounts/bankAccount/bankAccount')),
  // },
  // {
  //   path: 'subUnits/:id/credits/:creditId',
  //   component: asyncComponent(() => import('../clients/subUnits/subUnit/credits/credit/credit')),
  // },
  // {
  //   path: 'subUnits/:id/cards/:cardId',
  //   component: asyncComponent(() => import('../clients/subUnits/subUnit/cards/card/card')),
  // },
  // {
  //   path: 'promoCodes',
  //   component: asyncComponent(() => import('../admin/promoCodes/promoCodes')),
  // },
  // {
  //   path: 'promoCodes/:id',
  //   component: asyncComponent(() => import('../admin/promoCodes/promoCode/promoCode')),
  // },
  // {
  //   path: 'promoCodes/:id/edit',
  //   component: asyncComponent(() => import('../admin/promoCodes/promoCode/editPromoCode')),
  // },
  // {
  //   path: 'users',
  //   component: asyncComponent(() => import('../admin/users/userList/userList')),
  // },
  // {
  //   path: 'users/:id',
  //   component: asyncComponent(() => import('../admin/users/user/user')),
  // },
  // {
  //   path: 'users/:id/edit',
  //   component: asyncComponent(() => import('../admin/users/user/editUser')),
  // },
  // {
  //   path: 'districts',
  //   component: asyncComponent(() => import('../admin/districts/districtList/districtList')),
  // },
  // {
  //   path: 'districts/:id',
  //   component: asyncComponent(() => import('../admin/districts/district/district')),
  // },
  // {
  //   path: 'districts/:id/edit',
  //   component: asyncComponent(() => import('../admin/districts/district/editDistrict')),
  // },
  // {
  //   path: 'sectors',
  //   component: asyncComponent(() => import('../admin/sectors/sectorList/sectorList')),
  // },
  // {
  //   path: 'sectors/:id',
  //   component: asyncComponent(() => import('../admin/sectors/sector/sector')),
  // },
  // {
  //   path: 'sectors/:id/edit',
  //   component: asyncComponent(() => import('../admin/sectors/sector/editSector')),
  // },
  // {
  //   path: 'positions',
  //   component: asyncComponent(() => import('../admin/positions/positionList/positionList')),
  // },
  // {
  //   path: 'positions/:id',
  //   component: asyncComponent(() => import('../admin/positions/position/position')),
  // },
  // {
  //   path: 'jobs',
  //   component: asyncComponent(() => import('../jobs/jobs')),
  // },
  // {
  //   path: 'jobs/multiDay',
  //   component: asyncComponent(() => import('../jobs/jobs')),
  // },
  // {
  //   path: 'jobs/:id',
  //   component: asyncComponent(() => import('../jobs/job/job')),
  // },
  // {
  //   path: 'jobs/multiDay/:id',
  //   component: asyncComponent(() => import('../jobs/job/job')),
  // },
  // {
  //   path: 'jobs/:id/addPromocode',
  //   component: asyncComponent(() => import('../jobs/job/addPromocode/addPromocode/addPromocode')),
  // },
  // {
  //   path: 'jobs/multiDay/:id/addPromocode',
  //   component: asyncComponent(() => import('../jobs/job/addPromocode/addPromocode/addPromocode')),
  // },
  // {
  //   path: 'jobs/:id/addBonus',
  //   component: asyncComponent(() => import('../jobs/job/addBonus/addBonus/addBonus')),
  // },
  // {
  //   path: 'jobs/multiDay/:id/addBonus',
  //   component: asyncComponent(() => import('../jobs/job/addBonus/addBonus/addBonus')),
  // },
  // {
  //   path: 'jobs/:id/addGig',
  //   component: asyncComponent(() => import('../jobs/job/bookings/booking/editBooking/editBooking')),
  // },
  // {
  //   path: 'jobs/multiDay/:id/addGig',
  //   component: asyncComponent(() => import('../jobs/job/bookings/booking/editBooking/editBooking')),
  // },
  // {
  //   path: 'jobs/:id/bookings/:bookingId/pool',
  //   component: asyncComponent(() => import('../jobs/job/bookings/booking/pools/poolList/poolList')),
  // },
  // {
  //   path: 'jobs/:id/bookings/:bookingId/editBackups',
  //   component: asyncComponent(() => import('../jobs/job/bookings/booking/editBackups/editBackups')),
  // },
  // {
  //   path: 'jobs/multiDay/:id/bookings/:bookingId/editBackups',
  //   component: asyncComponent(() => import('../jobs/job/bookings/booking/editBackups/editBackups')),
  // },
  // {
  //   path: 'jobs/:id/bookings/:bookingId/editBooking',
  //   component: asyncComponent(() => import('../jobs/job/bookings/booking/editBooking/editBooking')),
  // },
  // {
  //   path: 'jobs/multiDay/:id/bookings/:bookingId/editBooking',
  //   component: asyncComponent(() => import('../jobs/job/bookings/booking/editBooking/editBooking')),
  // },
  // {
  //   path: 'broadcasts',
  //   component: asyncComponent(() => import('../admin/broadcasts/broadcasts')),
  // },
  // {
  //   path: 'broadcasts/:id',
  //   component: asyncComponent(() => import('../admin/broadcasts/broadcast/broadcast')),
  // },
  // {
  //   path: 'talent',
  //   component: asyncComponent(() => import('../talent/talent')),
  // },
  // {
  //   path: 'talent/:id',
  //   component: asyncComponent(() => import('../talent/talent/talent')),
  // },
  // {
  //   path: 'talent/:id/edit',
  //   component: asyncComponent(() => import('../talent/talent/editTalent')),
  // },
  // {
  //   path: 'talent/:id/talentAccreditations/:talentAccreditationId',
  //   component: asyncComponent(() => import('../talent/talent/accreditations/accreditation/accreditation')),
  // },
  // {
  //   path: 'partners',
  //   component: asyncComponent(() => import('../admin/partners/partnerList/partnerList')),
  // },
  // {
  //   path: 'partners/:id',
  //   component: asyncComponent(() => import('../admin/partners/partner/partner')),
  // },
  // {
  //   path: 'partners/:id/edit',
  //   component: asyncComponent(() => import('../admin/partners/partner/editPartner')),
  // },
  // {
  //   path: 'demoUsers',
  //   component: asyncComponent(() => import('../admin/demoUsers/demoUsers')),
  // },
  // {
  //   path: 'demoUsers/:id',
  //   component: asyncComponent(() => import('../admin/demoUsers/demoUser/demoUser')),
  // },
  // {
  //   path: 'demoUsers/:id/edit',
  //   component: asyncComponent(() => import('../admin/demoUsers/demoUser/editDemoUser')),
  // },
  // {
  //   path: 'referrals',
  //   component: asyncComponent(() => import('../admin/referrals/referrals')),
  // },
  // {
  //   path: 'termsAndPrivacy',
  //   component: asyncComponent(() => import('../admin/terms&privacy/terms&privacy')),
  // },
  // {
  //   path: 'interviews',
  //   component: asyncComponent(() => import('../applicants/applicants')),
  // },
  // {
  //   path: 'interviews/:id',
  //   component: asyncComponent(() => import('../applicants/applicant/applicant')),
  // },
  // {
  //   path: 'interviews/:id/edit',
  //   component: asyncComponent(() => import('../applicants/applicant/editApplicant')),
  // },
  // {
  //   path: 'applicants',
  //   component: asyncComponent(() => import('../applicants/applicants')),
  // },
  // {
  //   path: 'applicants/:id',
  //   component: asyncComponent(() => import('../applicants/applicant/applicant')),
  // },
  // {
  //   path: 'applicants/:id/edit',
  //   component: asyncComponent(() => import('../applicants/applicant/editApplicant')),
  // },
  // {
  //   path: 'payroll',
  //   component: asyncComponent(() => import('../admin/payroll/payroll')),
  // },
  // {
  //   path: 'payroll/export',
  //   component: asyncComponent(() => import('../admin/payroll/exportPayroll/exportPayroll')),
  // },
  // {
  //   path: 'flexAppOptions',
  //   component: asyncComponent(() => import('../admin/flexAppOptions/flexAppOptions')),
  // },
  // {
  //   path: 'clientFeedbackOptions',
  //   component: asyncComponent(() => import('../admin/clientFeedbackOptions/clientFeedbackOptions')),
  // },
  // {
  //   path: 'attires',
  //   component: asyncComponent(() => import('../admin/attires/attires')),
  // },
  // {
  //   path: 'attires/:id',
  //   component: asyncComponent(() => import('../admin/attires/attire/attire')),
  // },
  // {
  //   path: 'attires/shirts/:id',
  //   component: asyncComponent(() => import('../admin/attires/attire/attireGroups/shirt/shirt')),
  // },
  // {
  //   path: 'attires/pants/:id',
  //   component: asyncComponent(() => import('../admin/attires/attire/attireGroups/pants/pants')),
  // },
  // {
  //   path: 'attires/pants/:id/edit',
  //   component: asyncComponent(() => import('../admin/attires/attire/editAttire')),
  // },
  // {
  //   path: 'attires/shoes/:id',
  //   component: asyncComponent(() => import('../admin/attires/attire/attireGroups/shoes/shoes')),
  // },
  // {
  //   path: 'accreditations',
  //   component: asyncComponent(() => import('../admin/accreditationsSettings/accreditationsSettings')),
  // },
  // {
  //   path: 'accreditations/:id',
  //   component: asyncComponent(() => import('../admin/accreditationsSettings/editNewAccreditation')),
  // },
  // {
  //   path: 'denied',
  //   component: asyncComponent(() => import('../admin/deniedTalent/deniedTalent')),
  // },
  // {
  //   path: 'terminated',
  //   component: asyncComponent(() => import('../admin/terminatedTalent/terminatedTalent')),
  // },
  // {
  //   path: 'denied/:id',
  //   component: asyncComponent(() => import('../talent/talent/talent')),
  // },
  // {
  //   path: 'terminated/:id',
  //   component: asyncComponent(() => import('../talent/talent/talent')),
  // },
  // {
  //   path: 'denied/:id/edit',
  //   component: asyncComponent(() => import('../talent/talent/editTalent')),
  // },
  // {
  //   path: 'terminated/:id/edit',
  //   component: asyncComponent(() => import('../talent/talent/editTalent')),
  // },
  // {
  //   path: 'algorithm',
  //   component: asyncComponent(() => import('../admin/algorithm/algorithm')),
  // },
  // {
  //   path: 'automationConfig',
  //   component: asyncComponent(() => import('../admin/automationConfig/automationConfig')),
  // },
  // {
  //   path: 'help',
  //   component: asyncComponent(() => import('../help/help')),
  // },
  // {
  //   path: 'settings',
  //   component: asyncComponent(() => import('../settings/settings')),
  // },
  // {
  //   path: 'profile',
  //   component: asyncComponent(() => import('../profile/editProfile')),
  // },
  // {
  //   path: 'forbidden',
  //   component: asyncComponent(() => import('../forbidden/forbidden')),
  // },
  // {
  //   path: 'divisions',
  //   component: asyncComponent(() => import('../clients/divisions/divisions')),
  // },
  // {
  //   path: 'divisions/:id',
  //   component: asyncComponent(() => import('../clients/divisions/division/division')),
  // },
  // {
  //   path: 'divisions/:id/edit',
  //   component: asyncComponent(() => import('../clients/divisions/division/editDivision')),
  // },
  // {
  //   path: 'demand',
  //   component: asyncComponent(() => import('../dashboard/demand/demand')),
  // },
  // {
  //   path: 'supply',
  //   component: asyncComponent(() => import('../dashboard/supply/supply')),
  // },
  // {
  //   path: 'applicant',
  //   component: asyncComponent(() => import('../dashboard/applicantDashboard/applicantDashboard')),
  // },
];

// if (getTheme() !== 'bench') {
//   routes.push(
//     {
//       path: 'pricing',
//       component: asyncComponent(() => import('../admin/pricing/pricing')),
//     },
//     {
//       path: 'pricing/:id',
//       component: asyncComponent(() => import('../admin/pricing/editPosition/editPosition')),
//     },
//     {
//       path: 'industries/:id/addPosition',
//       component: asyncComponent(() => import('../admin/pricing/editPosition/editPosition')),
//     },
//   );
// }

// const GALogClosureFunction = () => {
//   let title = null;

//   return location => {
//     if (document && document.title !== title && google.analyticsId) {
//       const { title: documentTitle } = document;

//       pageview(location.pathname + location.search, [], documentTitle);
//       title = documentTitle;
//     }
//   };
// };

class AppRouter extends Component {
  constructor(props) {
    super(props);

    // const logPageToGA = GALogClosureFunction();

    // this.unlisten = history.listen(location => {
    //   setTimeout(() => logPageToGA(location), 1000);
    // });
  }

  // componentDidMount() {
  //   this.pageViewSetTimeout =
  //     setTimeout(() => {
  //       pageview(history.location.pathname + history.location.search, [], document.title);
  //     }, 1000);
  // }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    const { style } = this.props;

    return (
      <div style={style}>
        <Switch>
          {routes.map(singleRoute => {
            const { path, exact, ...otherProps } = singleRoute;

            return <Route exact={exact !== false} key={path} path={`/${path}`} {...otherProps} />;
          })}
        </Switch>
      </div>
    );
  }
}

export default AppRouter;
