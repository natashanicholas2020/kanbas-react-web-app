// import { Link } from "react-router-dom";
// import { ListGroup } from "react-bootstrap";
// import { AiOutlineDashboard } from "react-icons/ai";
// import { IoCalendarOutline } from "react-icons/io5";
// import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
// import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

// export default function KambazNavigation() {
//   return (
//     <ListGroup id="wd-kambaz-navigation" style={{ width: 120 }}
//       className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">

//       <ListGroup.Item id="wd-neu-link" target="_blank" action
//         href="https://www.northeastern.edu/"
//         className="bg-black border-0 text-center">
//         <img src="/images/NEU.png" width="75px" />
//       </ListGroup.Item>

//       <ListGroup.Item to="/Kambaz/Account" as={Link}
//         className="text-center border-0 bg-black text-white">
//         <FaRegCircleUser className="fs-1 text-white" />
//         <div>Account</div>
//       </ListGroup.Item>

//       <ListGroup.Item to="/Kambaz/Dashboard" as={Link}
//         className="text-center border-0 bg-white text-danger">
//         <AiOutlineDashboard className="fs-1 text-danger" />
//         <div>Dashboard</div>
//       </ListGroup.Item>

//       <ListGroup.Item to="/Kambaz/Dashboard" as={Link}
//         className="text-white bg-black text-center border-0">
//         <LiaBookSolid className="fs-1 text-danger" />
//         <div>Courses</div>
//       </ListGroup.Item>

//       <ListGroup.Item to="/Kambaz/Calendar" as={Link}
//         className="text-white bg-black text-center border-0">
//         <IoCalendarOutline className="fs-1 text-danger" />
//         <div>Calendar</div>
//       </ListGroup.Item>

//       <ListGroup.Item to="/Kambaz/Inbox" as={Link}
//         className="text-white bg-black text-center border-0">
//         <FaInbox className="fs-1 text-danger" />
//         <div>Inbox</div>
//       </ListGroup.Item>

//       <ListGroup.Item to="/Labs" as={Link}
//         className="text-white bg-black text-center border-0">
//         <LiaCogSolid className="fs-1 text-danger" />
//         <div>Labs</div>
//       </ListGroup.Item>

//     </ListGroup>
//   );
// }

import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
export default function KambazNavigation() {
  const { pathname } = useLocation();
  const links = [
    { label: "Dashboard", path: "/Kambaz/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses",   path: "/Kambaz/Dashboard", icon: LiaBookSolid },
    { label: "Calendar",  path: "/Kambaz/Calendar",  icon: IoCalendarOutline },
    { label: "Inbox",     path: "/Kambaz/Inbox",     icon: FaInbox },
    { label: "Labs",      path: "/Labs",             icon: LiaCogSolid },
  ];
  return (
    <ListGroup id="wd-kambaz-navigation" style={{width: 120}}
         className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
      <ListGroup.Item id="wd-neu-link" target="_blank" href="https://www.northeastern.edu/"
        action className="bg-black border-0 text-center">
        <img src="/images/NEU.png" width="75px" /></ListGroup.Item>
      <ListGroup.Item as={Link} to="/Kambaz/Account" className={`text-center border-0 bg-black
            ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
        <FaRegCircleUser className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
        <br />
        Account
      </ListGroup.Item>
      {links.map((link) => (
        <ListGroup.Item key={link.path} as={Link} to={link.path} className={`bg-black text-center border-0
              ${pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"}`}>
          {link.icon({ className: "fs-1 text-danger"})}
          <br />
          {link.label}
        </ListGroup.Item>
      ))}
    </ListGroup>
);}
