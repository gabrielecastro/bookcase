import { Box } from '@mui/material';

const TabPanel = (props) => {
  const { children, value, index, ...rest } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...rest}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

export default TabPanel;
