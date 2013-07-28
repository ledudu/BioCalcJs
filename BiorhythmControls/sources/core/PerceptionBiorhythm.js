var lu = lu || {};
lu.bioControls = lu.bioControls || {};
lu.bioControls.core = lu.bioControls.core || {};
lu.bioControls.core.biorhythms = lu.bioControls.core.biorhythms || {};

lu.bioControls.core.biorhythms.PerceptionBiorhythm = function() {
    var biorhythm = null;

    this.getName = function() {
        return "Perception";
    };

    this.getValue = function(dayIndex) {
        return biorhythm.getValue(dayIndex);
    };

    (function initialize() {
        var physicalBiorhythm = new lu.bioControls.core.biorhythms.PhysicalBiorhythm();
        var intuitiveBiorhythm = new lu.bioControls.core.biorhythms.IntuitiveBiorhythm();

        biorhythm = new lu.bioControls.core.biorhythms.AverageBiorhythm(physicalBiorhythm, intuitiveBiorhythm);
    }());
};