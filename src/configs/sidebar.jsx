import {
  MdOutlineInbox,
  MdOutlineOutbox,
  MdSpaceDashboard,
} from 'react-icons/md';
import { BsBell } from 'react-icons/bs';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { CgNotes } from 'react-icons/cg';

const SidebarConfigs = [
  {
    name: 'Dashboard',
    route: '/dashboard',
    icon: <MdSpaceDashboard size={24} />,
  },
  { name: 'Reminder', route: '/reminder', icon: <BsBell size={24} /> },
  { name: 'Inbox', route: '/inbox', icon: <MdOutlineInbox size={24} /> },
  { name: 'Outbox', route: '/outbox', icon: <MdOutlineOutbox size={24} /> },
  {
    name: 'Closed',
    route: '/closed',
    icon: <AiOutlineCloseCircle size={24} />,
  },
  { name: 'Draft', route: '/drafts', icon: <CgNotes size={24} /> },
];

export default SidebarConfigs;
