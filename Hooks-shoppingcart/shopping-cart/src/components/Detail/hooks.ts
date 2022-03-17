import { useEffect, useState } from "react";
import { IPhoneColor, IPhoneVersion } from "../../typings";

function useColor(colorGroup: IPhoneColor[], colorId: number): IPhoneColor {
    const [currentColor, setCurrentColor] = useState<IPhoneColor>(colorGroup[0]);

    useEffect(() => {
        const _currentColor = colorGroup.find((color: IPhoneColor) => color.cid === colorId);
        _currentColor && setCurrentColor(_currentColor)
    }, [colorGroup, colorId])

    return currentColor;
}

function usePrice(version: IPhoneVersion[], versionId: number): IPhoneVersion {
    const [currentVersion, setCurrentVersion] = useState<IPhoneVersion>(version[0]);

    useEffect(() => {
        const _currentVersion = version.find((v: IPhoneVersion) => v.vid === versionId);
        _currentVersion && setCurrentVersion(_currentVersion);
    }, [version, versionId]);

    return currentVersion;
}

export {
    useColor,
    usePrice
} 