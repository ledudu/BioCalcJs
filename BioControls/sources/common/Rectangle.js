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

lu.Rectangle = function(left, top, width, height) {

    /**
     * @deprecated
     */
    this.getLeft = getLeft;

    function getLeft() {
        return left;
    }

    Object.defineProperty(this, "left", {
        enumerable: true,
        get: getLeft
    });

    /**
     * @deprecated
     */
    this.getTop = getTop;

    function getTop() {
        return top;
    }

    Object.defineProperty(this, "top", {
        enumerable: true,
        get: getTop
    });

    /**
     * @deprecated
     */
    this.getWidth = getWidth;

    function getWidth() {
        return width;
    }

    Object.defineProperty(this, "width", {
        enumerable: true,
        get: getWidth
    });

    /**
     * @deprecated
     */
    this.getHeight = getHeight;

    function getHeight() {
        return height;
    }

    Object.defineProperty(this, "height", {
        enumerable: true,
        get: getHeight
    });

    this.toString = function() {
        return "[" + left.toString() + ", " + top.toString() + "] w=" + width.toString() + "; h=" + height.toString();
    };

    // --------------------------------------------------------------------------
    // Initialization
    // --------------------------------------------------------------------------

    (function initialize() {
        if (typeof left !== "number") {
            throw "left has to be a number.";
        }

        if (typeof top !== "number") {
            throw "top has to be a number.";
        }

        if (typeof width !== "number") {
            throw "width has to be a number.";
        }

        if (typeof height !== "number") {
            throw "height has to be a number.";
        }
    }).call(this);
};