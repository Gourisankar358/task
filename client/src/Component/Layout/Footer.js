import React from 'react'

export default function Footer() {
    return (
        <div style={{ position: "fixed", bottom: "0", left: "0", right: "0" }}>
            <footer class="bg-dark text-center text-white" >
                <div class="text-center p-3" style={{ "background-color": "rgba(0, 0, 0, 0.2)", }}>
                    Copyright © 2021 -
                     <a class="text-blue" href="#"> Demo.</a> All Right Reserved.

                </div>
            </footer>
        </div>
    )
}
