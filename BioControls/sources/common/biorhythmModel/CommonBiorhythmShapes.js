﻿// BioControls
// Copyright (C) 2013 Last Unicorn
// 
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <http://www.gnu.org/licenses/>.

var lu = lu || {};
lu.bioControls = lu.bioControls || {};
lu.bioControls.common = lu.bioControls.common || {};
lu.bioControls.common.biorhythmModel = lu.bioControls.common.biorhythmModel || {};

/**
 * It is a repository containing a list of BiorhythmShape objects; one for each
 * known biorhythm.
 * 
 * @returns {lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes}
 */
lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes = function() {

    var physicalShape = null;
    var emotionalShape = null;
    var intellectualShape = null;
    var intuitiveShape = null;

    var passionShape = null;
    var masteryShape = null;
    var wisdomShape = null;

    var perceptionShape = null;
    var psychicShape = null;
    var successShape = null;

    var estheticShape = null;
    var selfAwarenessShape = null;
    var spiritualShape = null;

    function createBiorhythmShapes() {
        physicalShape = lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes.createPhysicalBiorhythmShape();
        emotionalShape = lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes.createEmotionalBiorhythmShape();
        intellectualShape = lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes.createIntellectualBiorhythmShape();
        intuitiveShape = lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes.createIntuitiveBiorhythmShape();

        passionShape = lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes.createPassionBiorhythmShape();
        passionShape.isVisible = false;
        masteryShape = lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes.createMasteryBiorhythmShape();
        masteryShape.isVisible = false;
        wisdomShape = lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes.createWisdomBiorhythmShape();
        wisdomShape.isVisible = false;

        perceptionShape = lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes.createPerceptionBiorhythmShape();
        perceptionShape.isVisible = false;
        psychicShape = lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes.createPsychicBiorhythmShape();
        psychicShape.isVisible = false;
        successShape = lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes.createSuccessBiorhythmShape();
        successShape.isVisible = false;

        estheticShape = lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes.createEstheticBiorhythmShape();
        estheticShape.isVisible = false;
        selfAwarenessShape = lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes.createSelfAwarenessBiorhythmShape();
        selfAwarenessShape.isVisible = false;
        spiritualShape = lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes.createSpiritualBiorhythmShape();
        spiritualShape.isVisible = false;
    }

    this.getPhysicalShape = getPhysicalShape;

    /**
     * @deprecated
     */
    function getPhysicalShape() {
        return physicalShape;
    }

    Object.defineProperty(this, "physicalShape", {
        enumerable: true,
        configurable: false,
        get: getPhysicalShape
    });

    this.getEmotionalShape = getEmotionalShape;

    /**
     * @deprecated
     */
    function getEmotionalShape() {
        return emotionalShape;
    }

    Object.defineProperty(this, "emotionalShape", {
        enumerable: true,
        configurable: false,
        get: getEmotionalShape
    });

    this.getIntellectualShape = getIntellectualShape;

    /**
     * @deprecated
     */
    function getIntellectualShape() {
        return intellectualShape;
    }

    Object.defineProperty(this, "intellectualShape", {
        enumerable: true,
        configurable: false,
        get: getIntellectualShape
    });

    this.getIntuitiveShape = getIntuitiveShape;

    /**
     * @deprecated
     */
    function getIntuitiveShape() {
        return intuitiveShape;
    }

    Object.defineProperty(this, "intuitiveShape", {
        enumerable: true,
        configurable: false,
        get: getIntuitiveShape
    });

    this.getPrimaryBiorhythmShapes = function getPrimaryBiorhythmShapes() {
        return [ physicalShape, emotionalShape, intellectualShape, intuitiveShape ];
    };

    this.isAnyPrimaryVisible = function() {
        if (physicalShape.isVisible) {
            return true;
        }

        if (emotionalShape.isVisible) {
            return true;
        }

        if (intellectualShape.isVisible) {
            return true;
        }

        if (intuitiveShape.isVisible) {
            return true;
        }

        return false;
    };

    this.showPrimary = function(value) {
        if (value === undefined || value) {
            physicalShape.isVisible = true;
            emotionalShape.isVisible = true;
            intellectualShape.isVisible = true;
            intuitiveShape.isVisible = true;
        } else {
            physicalShape.isVisible = false;
            emotionalShape.isVisible = false;
            intellectualShape.isVisible = false;
            intuitiveShape.isVisible = false;
        }
    };

    this.getPassionShape = getPassionShape;

    /**
     * @deprecated
     */
    function getPassionShape() {
        return passionShape;
    }

    Object.defineProperty(this, "passionShape", {
        enumerable: true,
        configurable: false,
        get: getPassionShape
    });

    this.getMasteryShape = getMasteryShape;

    /**
     * @deprecated
     */
    function getMasteryShape() {
        return masteryShape;
    }

    Object.defineProperty(this, "masteryShape", {
        enumerable: true,
        configurable: false,
        get: getMasteryShape
    });

    this.getWisdomShape = getWisdomShape;

    /**
     * @deprecated
     */
    function getWisdomShape() {
        return wisdomShape;
    }

    Object.defineProperty(this, "wisdomShape", {
        enumerable: true,
        configurable: false,
        get: getWisdomShape
    });

    this.getSecondaryBiorhythmShapes = function getSecondaryBiorhythmShapes() {
        return [ passionShape, masteryShape, wisdomShape ];
    };

    this.isAnySecondaryVisible = function() {
        if (passionShape.isVisible) {
            return true;
        }

        if (masteryShape.isVisible) {
            return true;
        }

        if (wisdomShape.isVisible) {
            return true;
        }

        return false;
    };

    this.showSecondary = function(value) {
        if (value === undefined || value) {
            passionShape.isVisible = true;
            masteryShape.isVisible = true;
            wisdomShape.isVisible = true;
        } else {
            passionShape.isVisible = false;
            masteryShape.isVisible = false;
            wisdomShape.isVisible = false;
        }
    };

    this.getPerceptionShape = getPerceptionShape;

    /**
     * @deprecated
     */
    function getPerceptionShape() {
        return perceptionShape;
    }

    Object.defineProperty(this, "perceptionShape", {
        enumerable: true,
        configurable: false,
        get: getPerceptionShape
    });

    this.getPsychicShape = getPsychicShape;

    /**
     * @deprecated
     */
    function getPsychicShape() {
        return psychicShape;
    }

    Object.defineProperty(this, "psychicShape", {
        enumerable: true,
        configurable: false,
        get: getPsychicShape
    });

    this.getSuccessShape = getSuccessShape;

    /**
     * @deprecated
     */
    function getSuccessShape() {
        return successShape;
    }

    Object.defineProperty(this, "successShape", {
        enumerable: true,
        configurable: false,
        get: getSuccessShape
    });

    this.getExtraBiorhythmShapes = function getExtraBiorhythmShapes() {
        return [ perceptionShape, psychicShape, successShape ];
    };

    this.isAnyExtraVisible = function() {
        if (perceptionShape.isVisible) {
            return true;
        }

        if (psychicShape.isVisible) {
            return true;
        }

        if (successShape.isVisible) {
            return true;
        }

        return false;
    };

    this.showExtra = function(value) {
        if (value === undefined || value) {
            perceptionShape.isVisible = true;
            psychicShape.isVisible = true;
            successShape.isVisible = true;
        } else {
            perceptionShape.isVisible = false;
            psychicShape.isVisible = false;
            successShape.isVisible = false;
        }
    };

    this.getEstheticShape = getEstheticShape;

    /**
     * @deprecated
     */
    function getEstheticShape() {
        return estheticShape;
    }

    Object.defineProperty(this, "estheticShape", {
        enumerable: true,
        configurable: false,
        get: getEstheticShape
    });

    this.getSelfAwarenessShape = getSelfAwarenessShape;

    /**
     * @deprecated
     */
    function getSelfAwarenessShape() {
        return selfAwarenessShape;
    }

    Object.defineProperty(this, "selfAwarenessShape", {
        enumerable: true,
        configurable: false,
        get: getSelfAwarenessShape
    });

    this.getSpiritualShape = getSpiritualShape;

    /**
     * @deprecated
     */
    function getSpiritualShape() {
        return spiritualShape;
    }

    Object.defineProperty(this, "spiritualShape", {
        enumerable: true,
        configurable: false,
        get: getSpiritualShape
    });

    this.getIChingBiorhythmShapes = function getIChingBiorhythmShapes() {
        return [ estheticShape, selfAwarenessShape, spiritualShape ];
    };

    this.isAnyIChingVisible = function() {
        if (estheticShape.isVisible) {
            return true;
        }

        if (selfAwarenessShape.isVisible) {
            return true;
        }

        if (spiritualShape.isVisible) {
            return true;
        }

        return false;
    };

    this.showIChing = function(value) {
        if (value === undefined || value) {
            estheticShape.isVisible = true;
            selfAwarenessShape.isVisible = true;
            spiritualShape.isVisible = true;
        } else {
            estheticShape.isVisible = false;
            selfAwarenessShape.isVisible = false;
            spiritualShape.isVisible = false;
        }
    };

    this.getAll = getAll;
    function getAll() {
        return [ physicalShape, emotionalShape, intellectualShape, intuitiveShape,

        passionShape, masteryShape, wisdomShape,

        perceptionShape, psychicShape, successShape,

        estheticShape, selfAwarenessShape, spiritualShape ];
    }

    this.setBirthdayOnAll = function(birthday) {
        var biorhythms = getAll();

        for ( var i = 0; i < biorhythms.length; i++) {
            biorhythms[i].setBirthday(birthday);
        }
    };

    (function initialize() {
        createBiorhythmShapes();
    }());
};

lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes.defaultBirthday = new Date(1980, 05, 13);

// -----------------------------------------------------------------------------
// Primary Biorhythms
// -----------------------------------------------------------------------------

lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes.createPhysicalBiorhythmShape = function() {
    var biorhythm = new lu.bioControls.core.biorhythms.PhysicalBiorhythm();

    var shape = new lu.bioControls.common.biorhythmModel.BiorhythmShape();
    shape.name = biorhythm.name + " Shape";
    shape.biorhythm = biorhythm;
    shape.color = "#ff0000"; // Red
    shape.birthday = lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes.defaultBirthday;

    return shape;
};

lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes.createEmotionalBiorhythmShape = function() {
    var biorhythm = new lu.bioControls.core.biorhythms.EmotionalBiorhythm();

    var shape = new lu.bioControls.common.biorhythmModel.BiorhythmShape();
    shape.name = biorhythm.name + " Shape";
    shape.biorhythm = biorhythm;
    shape.color = "#32cd32"; // LimeGreen
    shape.birthday = lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes.defaultBirthday;

    return shape;
};

lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes.createIntellectualBiorhythmShape = function() {
    var biorhythm = new lu.bioControls.core.biorhythms.IntellectualBiorhythm();

    var shape = new lu.bioControls.common.biorhythmModel.BiorhythmShape();
    shape.name = biorhythm.name + " Shape";
    shape.biorhythm = biorhythm;
    shape.color = "#1e90ff"; // DodgerBlue
    shape.birthday = lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes.defaultBirthday;

    return shape;
};

lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes.createIntuitiveBiorhythmShape = function() {
    var biorhythm = new lu.bioControls.core.biorhythms.IntuitiveBiorhythm();

    var shape = new lu.bioControls.common.biorhythmModel.BiorhythmShape();
    shape.name = biorhythm.name + " Shape";
    shape.biorhythm = biorhythm;
    shape.color = "#ffa500"; // Orange
    shape.birthday = lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes.defaultBirthday;

    return shape;
};

// -----------------------------------------------------------------------------
// Secondary Biorhythms
// -----------------------------------------------------------------------------

lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes.createPassionBiorhythmShape = function() {
    var biorhythm = new lu.bioControls.core.biorhythms.PassionBiorhythm();

    var shape = new lu.bioControls.common.biorhythmModel.BiorhythmShape();
    shape.name = biorhythm.name + " Shape";
    shape.biorhythm = biorhythm;
    shape.color = "#ff0000"; // Red
    shape.setLineStyle(lu.LineStyle.dash);
    shape.birthday = lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes.defaultBirthday;

    return shape;
};

lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes.createMasteryBiorhythmShape = function() {
    var biorhythm = new lu.bioControls.core.biorhythms.MasteryBiorhythm();

    var shape = new lu.bioControls.common.biorhythmModel.BiorhythmShape();
    shape.name = biorhythm.name + " Shape";
    shape.biorhythm = biorhythm;
    shape.color = "#1e90ff"; // DodgerBlue
    shape.setLineStyle(lu.LineStyle.dashDot);
    shape.birthday = lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes.defaultBirthday;

    return shape;
};

lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes.createWisdomBiorhythmShape = function() {
    var biorhythm = new lu.bioControls.core.biorhythms.WisdomBiorhythm();

    var shape = new lu.bioControls.common.biorhythmModel.BiorhythmShape();
    shape.name = biorhythm.name + " Shape";
    shape.biorhythm = biorhythm;
    shape.color = "#32cd32"; // LimeGreen
    shape.setLineStyle(lu.LineStyle.dashDotDot);
    shape.birthday = lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes.defaultBirthday;

    return shape;
};

// -----------------------------------------------------------------------------
// Extra Biorhythms
// -----------------------------------------------------------------------------

lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes.createPerceptionBiorhythmShape = function() {
    var biorhythm = new lu.bioControls.core.biorhythms.PerceptionBiorhythm();

    var shape = new lu.bioControls.common.biorhythmModel.BiorhythmShape();
    shape.name = biorhythm.name + " Shape";
    shape.biorhythm = biorhythm;
    shape.color = "#ff0000"; // Red
    shape.setLineStyle(lu.LineStyle.dash);
    shape.birthday = lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes.defaultBirthday;

    return shape;
};

lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes.createPsychicBiorhythmShape = function() {
    var biorhythm = new lu.bioControls.core.biorhythms.PsychicBiorhythm();

    var shape = new lu.bioControls.common.biorhythmModel.BiorhythmShape();
    shape.name = biorhythm.name + " Shape";
    shape.biorhythm = biorhythm;
    shape.color = "#32cd32"; // LimeGreen
    shape.setLineStyle(lu.LineStyle.dashDot);
    shape.birthday = lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes.defaultBirthday;

    return shape;
};

lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes.createSuccessBiorhythmShape = function() {
    var biorhythm = new lu.bioControls.core.biorhythms.SuccessBiorhythm();

    var shape = new lu.bioControls.common.biorhythmModel.BiorhythmShape();
    shape.name = biorhythm.name + " Shape";
    shape.biorhythm = biorhythm;
    shape.color = "#1e90ff"; // DodgerBlue
    shape.setLineStyle(lu.LineStyle.dashDotDot);
    shape.birthday = lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes.defaultBirthday;

    return shape;
};

// -----------------------------------------------------------------------------
// I-Ching Biorhythms
// -----------------------------------------------------------------------------

lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes.createEstheticBiorhythmShape = function() {
    var biorhythm = new lu.bioControls.core.biorhythms.EstheticBiorhythm();

    var shape = new lu.bioControls.common.biorhythmModel.BiorhythmShape();
    shape.name = biorhythm.name + " Shape";
    shape.biorhythm = biorhythm;
    shape.color = "#ff0000"; // Red
    shape.birthday = lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes.defaultBirthday;

    return shape;
};

lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes.createSelfAwarenessBiorhythmShape = function() {
    var biorhythm = new lu.bioControls.core.biorhythms.SelfAwarenessBiorhythm();

    var shape = new lu.bioControls.common.biorhythmModel.BiorhythmShape();
    shape.name = biorhythm.name + " Shape";
    shape.biorhythm = biorhythm;
    shape.color = "#1e90ff"; // DodgerBlue
    shape.birthday = lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes.defaultBirthday;

    return shape;
};

lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes.createSpiritualBiorhythmShape = function() {
    var biorhythm = new lu.bioControls.core.biorhythms.SpiritualBiorhythm();

    var shape = new lu.bioControls.common.biorhythmModel.BiorhythmShape();
    shape.name = biorhythm.name + " Shape";
    shape.biorhythm = biorhythm;
    shape.color = "#ffa500"; // Orange
    shape.birthday = lu.bioControls.common.biorhythmModel.CommonBiorhythmShapes.defaultBirthday;

    return shape;
};
