import React from "react";
import styles from "./dot-navigator.module.scss";
import classNames from "classnames";

export type DotNavigatorProps = {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
};

export const DotNavigator = ({
  currentPage,
  totalPages = 0,
  onChange,
}: DotNavigatorProps) => {
  return (
    <div className={styles.wrapper}>
      {Array.from({ length: totalPages }).map((_, pageNumber) => (
        <button
          className={classNames(styles.pageDot, {
            [styles.pageDotActive]: currentPage === pageNumber,
          })}
          key={pageNumber}
          type="button"
          onClick={() => onChange(pageNumber)}
        />
      ))}
    </div>
  );
};
