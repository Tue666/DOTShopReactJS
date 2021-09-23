import { FormControlLabel, Switch } from "@mui/material";

import useSettings from "../../hooks/useSettings";

const SwitchTheme = () => {
    const { themeMode, onChangeTheme } = useSettings();
    return (
        <FormControlLabel
            style={{ margin: '0 10px' }}
            control={
                <Switch
                    size="small"
                    checked={themeMode === 'dark'}
                    onChange={onChangeTheme}
                />
            }
            label={themeMode === 'dark' ? <i className="fas fa-cloud-moon" style={{ color: '#f53d2d' }}></i> : <i className="fas fa-sun" style={{ color: 'orange' }}></i>}
        />
    );
};

export default SwitchTheme;
