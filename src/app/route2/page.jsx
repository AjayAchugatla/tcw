"use client";

import React from "react";
import Image from "next/image";
import {
  DIEThumbnail,
  TFI_GENRES,
  TFI_GENRES_VISIBLE_NAMES,
  handleClick,
  buttonStyle,
  buttonDivStyle,
  divMemePicDivStyle,
  SDThumbnail,
  rootDivStyle,
  gridDivStyle,
} from "./utils";

const Page = () => {
  return (
    <div style={rootDivStyle}>
      <h1 style={{ textAlign: "center", marginBottom: 30 }}>Route 1 Page</h1>

      <div style={gridDivStyle}>
        {/* Button 1 */}
        <div
          style={buttonDivStyle}
          onClick={() => {
            handleClick(TFI_GENRES.SD);
            console.log("Clicked SD button");
          }}
        >
          <button
            style={{
              ...buttonStyle,
              fontFamily: "SDFont, sans-serif",
              fontSize: "1.1rem",
              fontWeight: "normal",
            }}
          >
            {TFI_GENRES_VISIBLE_NAMES.SD}
          </button>
          <div style={divMemePicDivStyle}>
            <Image
              src={SDThumbnail}
              alt="Sarcastic Descriptions Thumbnail"
              width={70}
              height={70}
              style={{
                marginRight: "20px",
              }}
            />
          </div>
        </div>

        {/* Button 2 */}
        <div
          style={{
            ...buttonDivStyle,
            overflow: "hidden",
          }}
        >
          <button
            onClick={() => handleClick(TFI_GENRES.DIE)}
            style={buttonStyle}
          >
            {TFI_GENRES_VISIBLE_NAMES.DIE}
          </button>
          <div style={divMemePicDivStyle}>
            <Image
              src={DIEThumbnail}
              alt="Dialogue in English Thumbnail"
              width={90}
              height={100}
              style={{
                marginRight: "60px",
              }}
            />
          </div>
        </div>

        {/* Button 3 */}
        <div>
          <button
            onClick={() => handleClick(TFI_GENRES.SD)}
            style={buttonStyle}
          >
            Button 3
          </button>
          <div></div>
        </div>

        {/* Button 4 */}
        <div>
          <button
            onClick={() => handleClick(TFI_GENRES.SD)}
            style={buttonStyle}
          >
            Button 4
          </button>
          <div></div>
        </div>

        {/* Button 5 */}
        <div>
          <button
            onClick={() => handleClick(TFI_GENRES.SD)}
            style={buttonStyle}
          >
            Button 5
          </button>
          <div></div>
        </div>

        {/* Button 6 */}
        <div>
          <button
            onClick={() => handleClick(TFI_GENRES.SD)}
            style={buttonStyle}
          >
            Button 6
          </button>
          <div></div>
        </div>

        {/* Button 7 */}
        <div>
          <button
            onClick={() => handleClick(TFI_GENRES.SD)}
            style={buttonStyle}
          >
            Button 7
          </button>
          <div></div>
        </div>

        {/* Button 8 */}
        <div>
          <button
            onClick={() => handleClick(TFI_GENRES.SD)}
            style={buttonStyle}
          >
            Button 8
          </button>
          <div></div>
        </div>

        {/* Button 9 */}
        <div>
          <button
            onClick={() => handleClick(TFI_GENRES.SD)}
            style={buttonStyle}
          >
            Button 9
          </button>
          <div></div>
        </div>

        {/* Button 10 */}
        <div>
          <button
            onClick={() => handleClick(TFI_GENRES.SD)}
            style={buttonStyle}
          >
            Button 10
          </button>
          <div></div>
        </div>

        {/* Button 11 */}
        <div>
          <button
            onClick={() => handleClick(TFI_GENRES.SD)}
            style={buttonStyle}
          >
            Button 11
          </button>
          <div></div>
        </div>

        {/* Button 12 */}
        <div>
          <button
            onClick={() => handleClick(TFI_GENRES.SD)}
            style={buttonStyle}
          >
            Button 12
          </button>
          <div></div>
        </div>

        {/* Button 13 */}
        <div>
          <button
            onClick={() => handleClick(TFI_GENRES.SD)}
            style={buttonStyle}
          >
            Button 13
          </button>
          <div></div>
        </div>

        {/* Button 14 */}
        <div>
          <button
            onClick={() => handleClick(TFI_GENRES.SD)}
            style={buttonStyle}
          >
            Button 14
          </button>
          <div></div>
        </div>

        {/* Button 15 */}
        <div>
          <button
            onClick={() => handleClick(TFI_GENRES.SD)}
            style={buttonStyle}
          >
            Button 15
          </button>
          <div></div>
        </div>

        {/* Button 16 */}
        <div>
          <button
            onClick={() => handleClick(TFI_GENRES.SD)}
            style={buttonStyle}
          >
            Button 16
          </button>
          <div></div>
        </div>

        {/* Button 17 */}
        <div>
          <button
            onClick={() => handleClick(TFI_GENRES.SD)}
            style={buttonStyle}
          >
            Button 17
          </button>
          <div></div>
        </div>

        {/* Button 18 */}
        <div>
          <button
            onClick={() => handleClick(TFI_GENRES.SD)}
            style={buttonStyle}
          >
            Button 18
          </button>
          <div></div>
        </div>

        {/* Button 19 */}
        <div>
          <button
            onClick={() => handleClick(TFI_GENRES.SD)}
            style={buttonStyle}
          >
            Button 19
          </button>
          <div></div>
        </div>

        {/* Button 20 */}
        <div>
          <button
            onClick={() => handleClick(TFI_GENRES.SD)}
            style={buttonStyle}
          >
            Button 20
          </button>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Page;
