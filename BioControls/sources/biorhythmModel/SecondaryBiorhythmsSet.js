// BioControls
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
lu.bioControls.biorhythmModel = lu.bioControls.biorhythmModel || {};

lu.bioControls.biorhythmModel.SecondaryBiorhythmsSet = function() {

    var passionShape = null;
    var masteryShape = null;
    var wisdomShape = null;

    Object.defineProperty(this, "passionShape", {
        enumerable: true,
        configurable: false,
        get: getPassionShape
    });

    function getPassionShape() {
        return passionShape;
    }

    Object.defineProperty(this, "masteryShape", {
        enumerable: true,
        configurable: false,
        get: getMasteryShape
    });

    function getMasteryShape() {
        return masteryShape;
    }

    Object.defineProperty(this, "wisdomShape", {
        enumerable: true,
        configurable: false,
        get: getWisdomShape
    });

    function getWisdomShape() {
        return wisdomShape;
    }

    (function initialize() {
        var biorhythmShapesCreator = lu.bioControls.biorhythmModel.BiorhythShapesCreator;

        passionShape = biorhythmShapesCreator.createPassionBiorhythmShape();
        masteryShape = biorhythmShapesCreator.createMasteryBiorhythmShape();
        wisdomShape = biorhythmShapesCreator.createWisdomBiorhythmShape();

        lu.bioControls.biorhythmModel.BiorhythmShapeSet.call(this, [ passionShape, masteryShape, wisdomShape ]);
    }).call(this);
};

lu.bioControls.biorhythmModel.SecondaryBiorhythmsSet.inherit(lu.bioControls.biorhythmModel.BiorhythmShapeSet);